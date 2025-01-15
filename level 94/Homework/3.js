function squareNumbers(numbers, callback) {
    const squaredNumbers = [];
    numbers.forEach((number, index) => {
        setTimeout(() => {
            squaredNumbers.push(number * number);
            if (squaredNumbers.length === numbers.length) {
                callback(squaredNumbers);
            }
        }, 1000 * index);
    });
}

function displayResult(result) {
    console.log('Squared numbers:', result);
}

squareNumbers([1, 2, 3, 4], displayResult);
