// 1. 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// 2. 
const sumNumbers = [1, 2, 3, 4, 5];
let sum = 0;
sumNumbers.forEach(num => sum += num);
console.log('Sum:', sum);

// 3. 
const students = ['Alice', 'Bob', 'Charlie'];
students.forEach(name => console.log(`Student Name: ${name}`));

// 4. 
const integers = [1, 2, 3, 4, 5];
const doubled = [];
integers.forEach(num => doubled.push(num * 2));
console.log('Doubled Values:', doubled);

// 5. 
const squareNumbers = [1, 2, 3, 4, 5];
const squares = squareNumbers.map(num => num ** 2);
console.log('Squared Values:', squares);

// 6. 
const strings = ['apple', 'banana', 'cherry'];
const lengths = strings.map(str => str.length);
console.log('Lengths:', lengths);

// 7. 
const lowerCaseStrings = ['hello', 'world'];
const upperCaseStrings = lowerCaseStrings.map(str => str.toUpperCase());
console.log('Uppercase Strings:', upperCaseStrings);

// 8. 
const allIntegers = [1, 2, 3, 4, 5, 6];
const evenNumbers = allIntegers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// 9. 
const names = ['Alice', 'Bob', 'Charlotte', 'David'];
const longNames = names.filter(name => name.length > 5);
console.log('Long Names:', longNames);

// 10. 
const mixedIntegers = [-5, -2, 0, 1, 2, 3];
const positiveNumbers = mixedIntegers.filter(num => num > 0);
console.log('Positive Numbers:', positiveNumbers);
