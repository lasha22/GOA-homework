function manualIndexOf(pointer, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === pointer) {
            return i;
        }
    }
    return -1;
}


let myList = ['apple', 'banana', 'cherry', 'date'];

console.log(manualIndexOf('banana', myList)); 
console.log(manualIndexOf('cherry', myList)); 
console.log(manualIndexOf('kiwi', myList)); 



