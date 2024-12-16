const sumAll = function(numberA, numberB) {
    if (numberA < 0 || numberB < 0 || !Number.isInteger(numberA) || !Number.isInteger(numberB)) {
        return "ERROR";
    }
    
    let start = Math.min(numberA, numberB)
    let stop = Math.max(numberA, numberB)


    let total = 0;
    for (let i = start; i <= stop; i++) {
        total += i;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
