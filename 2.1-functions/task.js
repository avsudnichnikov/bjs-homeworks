function getSolutions(a, b, c) {
    const d = b ** 2 - 4 * a * c;
    const roots = [];
    if (d >= 0) {
        const x1 = (-b + Math.sqrt(d)) / 2 / a;
        roots.push(x1);
    }
    if (d > 0) {
        const x2 = (-b - Math.sqrt(d)) / 2 / a;
        roots.push(x2);
    }
    return {D: d, roots: roots};
}

function showSolutionsMessage(a, b, c) {
    result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    switch (result.roots.length) {
        case 1:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
            break;
        case 2:
            console.log(`Уравнение имеет  два корня. X₁ = ${result.roots[0]}, X₂ корень X₁ = ${result.roots[1]}`);
            break;
        default:
            console.log(`Уравнение не имеет вещественных корней`);
            break;
    }
}

function getAverageScore(data) {
    const result = {};
    for (let lesson in data) {
        result[lesson] = getAverageMark(data[lesson]);
    }
    result.average = getAverageMark(Object.values(result));
    return result;
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i += 1) {
        sum = sum + marks[i];
    }
    return sum / marks.length || 0;
}

function getPersonData(secretData) {
    return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
}

function getDecodedValue(secret) {
    return (secret) ? 'Эмильо' : 'Родриго';
}
