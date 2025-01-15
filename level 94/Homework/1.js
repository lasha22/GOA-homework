function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

function callback() {
    console.log('Callback executed!');
}

greet('lasha', callback);
