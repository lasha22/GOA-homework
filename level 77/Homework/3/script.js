function printGreaterPairs(n) {
    const pairs = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                pairs.push(`(${i}, ${j})`);
            }
        }
    }
    console.log(pairs.join(", "));
}


printGreaterPairs(3);
