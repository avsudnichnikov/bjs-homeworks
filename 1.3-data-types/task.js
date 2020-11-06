function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    if (isNaN(Number(percent))) {
        return 'Неверно указан параметр "Процентная ставка"';
    }
    if (isNaN(Number(contribution))) {
        return 'Неверно указан параметр "Первоначальный взнос"';
    }
    if (isNaN(Number(amount))) {
        return 'Неверно указан параметр "Общая стоимость"';
    }
    if (new Date(date).getFullYear() < new Date().getFullYear()) {
        return 'Неверно указан параметр "Дата окончания"';
    }

    const deltaMonth = new Date(date).getMonth() - new Date().getMonth();
    const deltaYear = new Date(date).getFullYear() - new Date().getFullYear();

    const paymentPeriod = 12 * deltaYear + deltaMonth;
    const creditBody = amount - contribution;
    const monthlyGrowth = percent / 1200;
    const monthlyPayment = creditBody * monthlyGrowth * (1 + 1 / (((1 + monthlyGrowth) ** paymentPeriod) - 1));

    const totalPayment = Number((monthlyPayment * paymentPeriod).toFixed(2));

    console.log(totalPayment);

    return totalPayment;
}

function getGreeting(name) {
    const greeting = `Привет, мир! Меня зовут ${name || 'Аноним'}.`

    console.log(greeting);

    return greeting;
}
