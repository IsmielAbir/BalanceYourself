// step-1 add click event handler with the submit button

document.getElementById("btn-submit").addEventListener('click', function(){
    //step-2 get the email address inside input field 
    //remember to use .value to get text from input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value

    //step-3 get password

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Don't use this process when I am professional
    //step-4 verify email and password
    if(email==='abc1@.com' && password==='secret1') 
    window.location.href='bank.html';
    else
    alert("Invalid");
    
})