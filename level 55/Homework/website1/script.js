let number = 0;

const p = document.getElementById('counter');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const resetButton = document.getElementById('resetButton');

plusButton.addEventListener('click', function() {
    number += 1;
    p.textContent = number;
});

minusButton.addEventListener('click', function() {
    number -= 1;
    p.textContent = number;
});

resetButton.addEventListener('click', function() {
    number = 0;
    p.textContent = number;
});
