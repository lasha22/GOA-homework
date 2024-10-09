const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); 



const colors = ['red', 'green', 'blue'];
const colorsCopy = [...colors];
console.log(colorsCopy); 



const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); 



const numbers = [10, 20, 30, 40, 50];
const [first, ...res] = numbers;
console.log(first);
console.log(res);  


function logArguments(...args) {
    console.log(args);
  }
  
  logArguments(1, 2, 3); 
  logArguments('a', 'b'); 

  


  const nums = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}

const result = add(...nums);
console.log(result); 



const user = { name: 'John', age: 30 };
const userClone = { ...user };
console.log(userClone); 



const car = { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'blue' };
const { brand, model, ...rest } = car;
console.log(brand); 
console.log(model); 
console.log(rest);  



const fruits = ['banana', 'cherry'];
const updatedFruits = ['apple', ...fruits, 'mango'];
console.log(updatedFruits); 

