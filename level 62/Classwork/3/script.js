// Initialize an array with some elements
let numbers = [1, 2, 3, 4];

// 1. Use push() to add elements to the end of the array
numbers.push(5, 6);
console.log('After push:', numbers); 
// Output: [1, 2, 3, 4, 5, 6]
// Adds 5 and 6 to the end of the array.

// 2. Use pop() to remove the last element of the array
let lastElement = numbers.pop();
console.log('After pop:', numbers);
// Output: [1, 2, 3, 4, 5]
// Removes 6 from the end of the array.
console.log('Popped element:', lastElement);
// Output: 6

// 3. Use unshift() to add elements to the beginning of the array
numbers.unshift(0);
console.log('After unshift:', numbers);
// Output: [0, 1, 2, 3, 4, 5]
// Adds 0 to the beginning of the array.

// 4. Use shift() to remove the first element of the array
let firstElement = numbers.shift();
console.log('After shift:', numbers);
// Output: [1, 2, 3, 4, 5]
// Removes 0 from the beginning of the array.
console.log('Shifted element:', firstElement);
// Output: 0

// 5. Use slice() to create a new array from a portion of the original array
let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);
// Output: [2, 3, 4]
// Creates a new array from index 1 to index 3 (4 is not included).

// 6. Use splice() to remove elements and/or add new elements
let removedElements = numbers.splice(2, 2, 10, 11);
console.log('After splice:', numbers);
// Output: [1, 2, 10, 11, 5]
// Removes 2 elements starting at index 2 and adds 10 and 11 in their place.
console.log('Removed elements:', removedElements);
// Output: [3, 4]
