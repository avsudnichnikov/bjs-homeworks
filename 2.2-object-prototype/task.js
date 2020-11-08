//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function () {
    const str = this.split(' ').join('').toUpperCase();
    const middle = Math.floor(str.length / 2);
    for (let i = 0; i < middle; i += 1) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function getAverageMark(marks) {
    return Math.round(getAverage(marks));
}

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i];
    }
    return sum / arr.length || 0;
}

function checkBirthday(birthdayTimestamp) {
    const birthday = new Date(birthdayTimestamp);
    const now = new Date();

    const nowYear = now.getFullYear();
    const birthdayYear = birthday.getFullYear();

    const nowLeapYear = Math.floor(nowYear / 4) * 4;
    const birthdayLeapYear = Math.ceil(birthdayYear / 4) * 4;

    let leapYearsDays = (nowLeapYear - birthdayLeapYear) / 4 - 1;
    leapYearsDays += ((nowLeapYear === nowYear) && (now.getMonth() > 1)) ? 1 : 0;
    leapYearsDays += ((birthdayLeapYear === birthdayYear) && (birthday.getMonth() < 2)) ? 1 : 0;

    let diff = (now - birthday);

    const age = Math.floor(diff / 1000 / 3600 / 24 - leapYearsDays - 1) / 365;

    return age >= 18;
}

// более простое решение поставленной задачи, не соответствует тз
// function checkBirthday(birthdayTimestamp) {
//     const birthday = new Date(birthdayTimestamp);
//     return new Date() >= new Date(birthday.getFullYear() + 18, birthday.getMonth(), birthday.getDate() + 1);
// }
