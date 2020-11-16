function getResult(a, b, c) {
    "use strict";
    const result = [];

    const d = b ** 2 - 4 * a * c;

    if (d >= 0) {
        result.push((-b + Math.sqrt(d)) / 2 / a);
    }
    if (d > 0) {
        result.push((-b - Math.sqrt(d)) / 2 / a);
    }

    return result;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length >= 5) {
        marks = marks.slice(0, 5);
    }

    for (let i = 0; i < marks.length; i += 1) {
        sum = sum + marks[i];
    }

    return sum / marks.length || 0;
}

function askDrink(name, dateOfBirthday) {
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    }
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}
