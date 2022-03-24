const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('errorMessage');

password.addEventListener('keyup', checkIfSame);
confirmPassword.addEventListener('keyup', checkIfSame);

function checkIfSame(){
    const passVal = password.value;
    const confirmPassVal = confirmPassword.value;
    if(passVal.length==0 || confirmPassVal.length==0) return;
    if(passVal==confirmPassVal){
        password.classList.remove('error');
        password.classList.add('validPassword');
        confirmPassword.classList.add('validPassword');
        confirmPassword.classList.remove('error');
        errorMessage.innerText = '';
    }else{
        password.classList.add('error');
        password.classList.remove('validPassword');
        confirmPassword.classList.remove('validPassword');
        confirmPassword.classList.add('error');
        errorMessage.innerText = '* Passwords do not match';
    }
}