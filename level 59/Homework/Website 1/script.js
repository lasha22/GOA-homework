
function validateForm(event) {
    
    event.preventDefault();

    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

   
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

 
    let hasError = false;

    if (fullName.trim() === '') {
        nameError.textContent = 'Full name is required.';
        hasError = true;
    }

    if (email.trim() === '') {
        emailError.textContent = 'Email is required.';
        hasError = true;
    }

    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        hasError = true;
    }

   
    if (!hasError) {
        alert('Form submitted successfully!');
        
    }
}


document.getElementById('signupForm').addEventListener('submit', validateForm);
