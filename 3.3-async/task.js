class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error('Звонок с таким id уже создан');
            return false;
        }
        this.alarmCollection.push({id, time, callback});
        return true;
    }

    removeClock(id) {
        const targetId = this.alarmCollection.findIndex((item) => item.id === id);
        if (targetId === -1) {
            return false;
        }
        this.alarmCollection.splice(targetId, 1);
        return true;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        const getCurrentTime = this.getCurrentFormattedTime;

        function checkClock(clock) {
            if (getCurrentTime() === clock.time) {
                clock.callback();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item))
            }, 1000)
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`⏰ Всего установлено ${this.alarmCollection.length}${this.alarmCollection.length ? ':' : '.'}`);
        this.alarmCollection.forEach(
            (item) => console.log(`Будильник №${item.id} заведён на ${item.time}`)
        )
    }

    clearAlarms() {
        this.alarmCollection = [];
    }
}

function testCase() {
    console.warn('testCase start');

    const addTime = (start, interval) => {
        const timer = new Date();
        const startTime = start.split(':');
        timer.setHours(startTime[0]);
        timer.setMinutes(Number(startTime[1]) + interval);
        return timer.toTimeString().slice(0, 5);
    }

    const alarm = new AlarmClock();
    const currentTime = alarm.getCurrentFormattedTime();

    alarm.addClock(
        currentTime,
        () => {
            console.log('Пора вставать');
        },
        1
    );
    alarm.addClock(
        addTime(currentTime, 1),
        () => {
            console.log('Давай уже, вставай!');
            alarm.removeClock(2);
        },
        2
    );
    alarm.addClock(
        addTime(currentTime, 2),
        () => {
            alarm.printAlarms();
            console.log('Я умываю руки');
            alarm.clearAlarms();
            alarm.stop();
            alarm.printAlarms();
        },
        3
    );
    try {
        alarm.addClock(
            addTime(currentTime, 1),
            () => {
                console.log('Ну всё, ты проспал');
            }
        );
    } catch (e) {
        console.error(e);
    }
    console.log('Текущее время:', currentTime);
    alarm.printAlarms();
    alarm.start();
    console.warn('testCase finish');
}
