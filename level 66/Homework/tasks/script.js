//  1
function exercise1() {
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    document.body.appendChild(p);
}

// 2
function exercise2() {
    const div = document.createElement('div');
    div.textContent = 'I am a div to be cloned!';
    document.body.appendChild(div);
    const clonedDiv = div.cloneNode(true);
    document.body.appendChild(clonedDiv);
}

// 3
function exercise3() {
    const list = document.createElement('ul');
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }
    document.body.appendChild(list);
    
    const itemToRemove = list.querySelector('li'); 
    if (itemToRemove) {
        list.removeChild(itemToRemove);
    }
}

// 4
function exercise4() {
    const h1 = document.createElement('h1');
    h1.textContent = 'This is a Heading';
    document.body.appendChild(h1);
    
    const h2 = document.createElement('h2');
    h2.textContent = 'This is a new Heading';
    h1.parentNode.replaceChild(h2, h1);
}

// 5
function exercise5() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This paragraph will be removed.';
    document.body.appendChild(paragraph);
    
    paragraph.remove();
}

// 7
function exercise7() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        span.textContent = `Span ${i + 1} `;
        container.appendChild(span);
    }
}

// 8
function exercise8() {
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);
    
    button.onclick = () => alert('Original Button Clicked!');
    
    const clonedButton = button.cloneNode(true);
    clonedButton.textContent = 'Cloned Button';
    clonedButton.onclick = () => alert('Cloned Button Clicked!');
    document.body.appendChild(clonedButton);
}

// 9
function exercise9() {
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/100';
    img.alt = 'Placeholder Image';
    document.body.appendChild(img);
    
    const targetDiv = document.createElement('div');
    targetDiv.textContent = 'Target Div';
    document.body.appendChild(targetDiv);
    
    targetDiv.appendChild(img); 
}

// 10
function exercise10() {
    const message = document.createElement('div');
    message.textContent = 'This is a toggle message!';
    document.body.appendChild(message);
    
    message.style.display = 'none'; 
    
    
    const toggleMessage = () => {
        message.style.display = message.style.display === 'none' ? 'block' : 'none';
    };
    
    // Add button to toggle visibility
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Message';
    toggleButton.onclick = toggleMessage;
    document.body.appendChild(toggleButton);
}



