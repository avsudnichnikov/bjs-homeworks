function sleep(milliseconds)
{
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
        const findResult = memory.find((item) => compareArrays(item.args, args));
        if (findResult) {
            return findResult.result;
        }
        const result = fn(...args);
        if (memory.length === limit) {
            memory.unshift();
        }
        memory.push({args, result});
        return result;
    };
}
