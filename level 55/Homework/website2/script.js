
document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    
    const message = `Your name is ${firstName}. Your surname is ${lastName}. Your age is ${age}.`;

    
    document.getElementById('output').textContent = message;
});
