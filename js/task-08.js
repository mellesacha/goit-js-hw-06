const formReg = document.querySelector('.login-form');

formReg.addEventListener('submit', OnSubmit)

function OnSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
            
    if (email.value === "" || password.value === "") {
        alert('Fill all fields!');
        return false
    }
   
    const userReg = {
        email: email.value,
        password: password.value,
    };

    console.log(userReg);
        
    event.currentTarget.reset();
   
}
