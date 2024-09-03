function generateEven(border) {
    
    let evenNumbers = [];
    
    
    let sum = 0;
    
    
    for (let i = 0; i < border; i++) {
        if (i % 2 === 0) { 
            evenNumbers.push(i);
            sum += i; 
        }
    }
    

    return {
        array: evenNumbers,
        sum: sum
    };
}


const border = 10; 
const result = generateEven(border);

console.log("Array of even numbers:", result.array);
console.log("Sum of even numbers:", result.sum);
