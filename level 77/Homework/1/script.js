function printPositions(rows, cols) {
    for (let col = 1; col <= cols; col++) {
        for (let row = 1; row <= rows; row++) {
            console.log(`row: ${row} col: ${col}`);
        }
    }
}


printPositions(2, 2);
