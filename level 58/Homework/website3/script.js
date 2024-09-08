function sumOfEvenNumbers(maxNumber) {
    let sum = 0;
    
   
    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    
    return sum;
}


console.log("Sum of even numbers up to 10:", sumOfEvenNumbers(10)); 
console.log("Sum of even numbers up to 20:", sumOfEvenNumbers(20)); 
