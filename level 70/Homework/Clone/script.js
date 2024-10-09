function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function customMap(arr, callback) {
    const result = [];
    customForEach(arr, (value, index) => {
        result[index] = callback(value, index, arr);
    });
    return result;
}

function customFilter(arr, callback) {
    const result = [];
    customForEach(arr, (value, index) => {
        if (callback(value, index, arr)) {
            result.push(value);
        }
    });
    return result;
}

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    customForEach(arr.slice(startIndex), (value) => {
        accumulator = callback(accumulator, value);
    });
    return accumulator;
}
