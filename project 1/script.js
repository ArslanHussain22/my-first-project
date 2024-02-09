// retrieving html elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const contact = document.getElementById('contact');

function errormsg(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form_control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
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
})