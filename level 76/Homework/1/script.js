function findCommonElements(array1, array2) {
    const commonElements = [];
    
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commonElements.push(array1[i]);
                break; 
            }
        }
    }
    
    return commonElements;
}

const array1 = [142, 242, 312, 442, 9];
const array2 = [723, 323, 635, 79, 4];
const common = findCommonElements(array1, array2);
console.log(common);
