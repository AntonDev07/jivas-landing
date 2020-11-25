let buttons = document.querySelectorAll('.tab-switch-button');

let loginForm = document.querySelector('.login-form-element');
let registerForm = document.querySelector('.register-form-element');

function handle(e) {
    let btnLogin = document.querySelector('.tab-switch-button[data-name="login"]');
    let btnRegister = document.querySelector('.tab-switch-button[data-name="register"]');
  

    if(this.getAttribute("data-name") === "login") {
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        loginForm.style.cssText = 'transform: translate(0px, 0px); opacity: 1; visibility: visible; z-index: 2; transition: all 0.6s ease-in-out 0s; display: block;'
        registerForm.style.cssText = 'transform: translate(50%, 0px); opacity: 0; visibility: hidden; z-index: 1; position: absolute; right: 100px; transition: all 0.6s ease-in-out 0s; display: block;'
    }
    else {
        btnLogin.classList.remove('active');
        btnRegister.classList.add('active');
        loginForm.style.cssText = 'transform: translate(50%, 0px); opacity: 0; visibility: hidden; z-index: 1; transition: all 0.6s ease-in-out 0s; display: block;'
        registerForm.style.cssText = 'transform: translate(0px, 0px); opacity: 1; visibility: visible; z-index: 2; position: absolute; right: 100px; transition: all 0.6s ease-in-out 0s; display: block;'
    }
    
}
buttons.forEach(button => button.addEventListener('click', handle));

// EVENT FOR INPUT

let inputs = document.querySelectorAll('.form__input input');
inputs.forEach(input => input.addEventListener('focusout', function() {
    if(input.value !== '') {
        return;
    }
   this.parentNode.classList.remove('labelName');
}));
inputs.forEach(input => input.addEventListener('focus', function() {
    this.parentNode.classList.add('labelName');
 }));