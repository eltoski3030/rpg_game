

// accprompt.addEventListener('click', accprompt.style = "block");





const logInButton = document.getElementById('log-in-button');
const accountButton = document.getElementById('acc-button');
const username = document.getElementById('user');
const password = document.getElementById('password');
const accprompt = document.getElementById("acc-promp");
const saveAcc = document.getElementById("save-account");


accprompt.style.display = "none";
saveAcc.style.display = "none";

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


function acc_create() {
    accprompt.style.display = "block";
    username.style.display = "none";
    password.style.display = "none";
    saveAcc.style.display = "block"; 
 }
 
 accountButton.addEventListener('click', acc_create);



const newAccName = document.getElementById("input3")
const newAccPass = document.getElementById("input4")
const retypePass = document.getElementById("input5")



function newAccount() {
    const newName = newAccName.value;
    const newPass = newAccPass.value;
    const retype = retypePass.value;

    if (newPass === '' || newName === '') {
        alert('Password and username are missing');
    } else if (newPass !== retype || newName.length < 8 || newPass.length < 8) {
        alert('Password did not match or Name/Password is too short');
    } else {
        saveAcc.style.display = "block";
        window.location.href = 'index.html';
    }
}
    saveAcc.addEventListener('click', newAccount);
    
