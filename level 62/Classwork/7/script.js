// Initialize an array with some elements
let array = ['banana', 'apple', 'orange', 'apple', 'banana', 'grape'];

// 1. .indexOf() - Find the first occurrence of an element
console.log('indexOf examples:');
console.log(array.indexOf('apple')); // Output: 1
// The first occurrence of 'apple' is at index 1.
console.log(array.indexOf('banana')); // Output: 0
// The first occurrence of 'banana' is at index 0.
console.log(array.indexOf('kiwi')); // Output: -1
// 'kiwi' is not found in the array, so -1 is returned.

// 2. .lastIndexOf() - Find the last occurrence of an element
console.log('\nlastIndexOf examples:');
console.log(array.lastIndexOf('apple')); // Output: 3
// The last occurrence of 'apple' is at index 3.
console.log(array.lastIndexOf('banana')); // Output: 4
// The last occurrence of 'banana' is at index 4.
console.log(array.lastIndexOf('grape')); // Output: 5
// The last occurrence of 'grape' is at index 5.

// 3. .sort() - Sort the elements of the array
console.log('\nsort examples:');
let sortedArray = array.slice().sort(); // Using slice() to create a copy to avoid mutating the original array
console.log(sortedArray); // Output: ['apple', 'apple', 'banana', 'banana', 'grape', 'orange']
// Sorts the elements in alphabetical order.

let numberArray = [10, 5, 100, 1];
let sortedNumbers = numberArray.slice().sort((a, b) => a - b); // Numeric sort (ascending)
console.log(sortedNumbers); // Output: [1, 5, 10, 100]
// Sorts numbers in ascending order.

let reversedNumberArray = numberArray.slice().sort((a, b) => b - a); // Numeric sort (descending)
console.log(reversedNumberArray); // Output: [100, 10, 5, 1]
// Sorts numbers in descending order.

// 4. .reverse() - Reverse the elements of the array
console.log('\nreverse examples:');
let reversedArray = array.slice().reverse(); // Using slice() to create a copy to avoid mutating the original array
console.log(reversedArray); // Output: ['grape', 'banana', 'apple', 'orange', 'apple', 'banana']
// Reverses the order of elements.

let reversedSortedArray = sortedArray.slice().reverse();
console.log(reversedSortedArray); // Output: ['orange', 'grape', 'banana', 'banana', 'apple', 'apple']
// Reverses the order of the already sorted array.

let reversedNumbers = numberArray.slice().reverse();
console.log(reversedNumbers); // Output: [100, 10, 5, 1]
// Reverses the order of the numbers.

