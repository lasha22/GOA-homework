let counter = 0;


const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');


function incrementCounter() {
    counter += 1; 
    counterParagraph.textContent = counter; 
}


incrementButton.onclick = incrementCounter;
