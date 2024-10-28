let temp = [[20, 22, 23, 21], [15, 16, 12, 10]];
let Day = ["morning", "afternoon", "noon", "evening"];

for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
        console.log(`Current temperature for ${Day[j]} is: ${temp[i][j]}`);
    }
}