function delayedMessage(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}

function processComplete() {
    console.log('Process completed!');
}

delayedMessage('Hello after 2 seconds!', processComplete);
