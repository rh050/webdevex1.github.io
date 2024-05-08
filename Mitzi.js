/* Oranit Madar 207973488 */
/* Raziel houri 305427874 */


const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirm_password=document.getElementById('confirm_password');


form.addEventListener('submit', e => {
    e.preventDefault();

    ValidateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};


const ValidateInputs = () => {

    const emailvalue = email.value.trim();
    const passwordvalue=password.value.trim();
    const confirm_passwordValue=confirm_password.value.trim();

    if(emailvalue === ''){
        setError(email,'Email is required');
    }else if (!isValidEmail(emailvalue)) {
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordvalue === ''){
        setError(password,'password is required');
    }else if(passwordvalue.length < 8){
        setError(password,'password must be at least 8 characters.');
    }else{
        setSuccess(password);
    }

    if(confirm_passwordValue=== ''){
        setError(confirm_password,'please confirm your password');
    }else if(passwordvalue !== confirm_passwordValue){
        setError(confirm_password,'passwords doesnt match');
    }else{
        setSuccess(confirm_password);
    }

};

























// function validateForm() {

    
//     // var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirm_password").value;

//     const email = document.getElementById("email");


//     if(email.value.length=== 0){
//         email.style.backgroundColor="#ff4d4d";
//     }
//     else{
//         email.style.backgroundColor="#1dcd59";
//     }



//     // Check if email and password fields are empty
//     if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {

//         alert("Email and password cannot be empty");
//         return false; // Prevent form submission
//     }

//     // Check if password is at least 8 characters long
// if (password.length < 8) {
//     document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
//     document.getElementById("passwordError").style.color = "red"; // Set color of error message
//     return false;
// } else {
//     document.getElementById("passwordError").innerText = ""; // Clear error message if password is valid
// }

// // Check if confirm password matches password
// if (confirmPassword !== password) {
//     document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
//     document.getElementById("confirmPasswordError").style.color = "red"; // Set color of error message
//     return false;
// } else {
//     document.getElementById("confirmPasswordError").innerText = ""; // Clear error message if passwords match
// }


    // // Check if password is at least 8 characters long
    // if (password.length < 8) {
    //     document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
    //     return false;
    // } else {
    //     document.getElementById("passwordError").innerText = "";
    // }

    // // Check if confirm password matches password
    // if (confirmPassword !== password) {
    //     document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    //     return false;
    // } else {
    //     document.getElementById("confirmPasswordError").innerText = "";
    // }

//     return true; // Allow form submission
// }

