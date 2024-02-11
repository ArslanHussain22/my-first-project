// retrieving html elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const contact = document.getElementById('contact');
//show error msg when input is empty
function errormsg(input, message){
    //get the parent element of the input field(.form_control)
    const formcontrol = input.parentElement;
    //override the class to add error
    formcontrol.className = 'form_control error';
    //get the error msg for small element
    const small = formcontrol.querySelector('small');
    //override the text of the error msg of small 
    small.innerText = message;
}

// show success msg when fied is not empty
function showsuccess(input){
    //get the parent element of the input field(.form_control)
    const formcontrol = input.parentElement;
    //override the class to add success
    formcontrol.className = 'form_control success';
}
//Event listener
// create event listener for submit butto
form.addEventListener('submit' , function(e) {
    //stop reload page
    e.preventDefault();
    // console.log(username.value);
    //if input is empty
    if(username.value === ''){
        errormsg(username, 'Username must be Required');
    }
    else{
        showsuccess(username);
    }

    if(email.value === ''){
        errormsg(email, 'Email must be Required');
    }
    else{
        showsuccess(email);
    }

    if(password.value === ''){
        errormsg(password, 'Password must be Required');
    }
    else{
        showsuccess(password);
    }

    if(contact.value === ''){
        errormsg(contact, 'Contact must be Required');
    }
    else{
        showsuccess(contact);
    }
})