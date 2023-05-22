const formReg = document.querySelector('.login-form');

formReg.addEventListener('submit', OnSubmit)

function OnSubmit(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;
            
    if (email.value === "" || password.value.trim() === "") {
        alert('Fill all fields!');
        return false
    }
   
    const userReg = {
        email: email.value,
        password: password.value.trim(),
    };

    console.log(userReg);
        
    event.target.reset();
   
}
