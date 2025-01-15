let task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Task 1 complete');
    }, 2000);
});

task1.then((message) => {
    console.log(message);
});
