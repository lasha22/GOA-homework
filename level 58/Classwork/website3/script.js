function sumEvenNumbers(maxNumber) {
    let sum = 0;

    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}


const result1 = sumEvenNumbers(10);
console.log('Sum of even numbers up to 10:', result1);

const result2 = sumEvenNumbers(20);
console.log('Sum of even numbers up to 20:', result2);
