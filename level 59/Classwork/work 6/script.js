
const correctPassword = 'lasha123'; 

let attempts = 3;

while (attempts > 0) {
    
    let userPassword = prompt(`Enter password. You have ${attempts} attempt(s) left:`);

    
    if (userPassword === correctPassword) {
        
        alert('Access granted.');
        break; 
    } else {
        
        attempts--;

        
        if (attempts === 0) {
            alert('Access denied. No attempts left.');
        }
    }
}
