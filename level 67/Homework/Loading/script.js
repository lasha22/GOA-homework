const childDiv = document.getElementById('box');

let left = 0;
let position = 1;

setInterval(function() {
    left += position;
    
    if (left >= 150) {
        position = -1; // Change direction
    } else if (left <= 0) {
        position = 1; // Change direction
    }

    childDiv.style.left = left + 'px';
}, 30);
