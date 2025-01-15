if (!localStorage.getItem('userName')) {
    document.getElementById('nameForm').style.display = 'block';
} else {
    loadGame();
}


function startGame() {
    const userName = document.getElementById('userName').value.trim();
    if (userName) {
        localStorage.setItem('userName', userName);
        loadGame();
    } else {
        alert('Please enter your name');
    }
}


function loadGame() {
    const userName = localStorage.getItem('userName');
    document.getElementById('userDisplayName').textContent = userName;
    document.getElementById('nameForm').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';

    
    const score = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
    const difficulty = localStorage.getItem('difficulty') ? parseInt(localStorage.getItem('difficulty')) : 1;

    document.getElementById('userScore').textContent = score;

    
    const rangeStart = 1;
    const rangeEnd = Math.pow(2, difficulty);
    document.getElementById('rangeStart').textContent = rangeStart;
    document.getElementById('rangeEnd').textContent = rangeEnd;

   
    localStorage.setItem('difficulty', difficulty);
    localStorage.setItem('targetNumber', Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart);
}


function changeBackgroundColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
}


function checkGuess() {
    const guess = parseInt(document.getElementById('guessNumber').value);
    const targetNumber = localStorage.getItem('targetNumber');
    let score = parseInt(localStorage.getItem('userScore'));

    if (guess === parseInt(targetNumber)) {
        score++;
        localStorage.setItem('userScore', score);
        localStorage.setItem('difficulty', parseInt(localStorage.getItem('difficulty')) + 1);
        document.getElementById('hintMessage').textContent = 'Correct! Your score is now ' + score;
    } else {
        document.getElementById('hintMessage').textContent = 'Incorrect. Try again!';
    }

    loadGame();
}
