if (localStorage.getItem('counter') === null) {
    localStorage.setItem('counter', 0);
}

document.getElementById('counter').textContent = localStorage.getItem('counter');

function increment() {
    let count = parseInt(localStorage.getItem('counter'));
    count++;
    localStorage.setItem('counter', count);
    document.getElementById('counter').textContent = count;
}