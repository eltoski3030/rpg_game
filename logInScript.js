const logInButton = document.getElementById('log-in-button');
const accountButton = document.getElementById('acc-button');
const username = document.getElementById('user');
const password = document.getElementById('password');

function authentication() {
    
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (passwordValue === '' || usernameValue === '') {
        alert('Password and username are missing');
    } else {
        
        window.location.href = 'index.html';
        
    }
}
logInButton.addEventListener('click', authentication);
