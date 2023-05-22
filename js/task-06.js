const inputField = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length]');


inputField.addEventListener('blur', OnInput)

function OnInput(event) {

    inputField.classList.add('invalid')

    if (event.target.value.trim().length === +inputLength.dataset.length) {
        inputField.classList.replace('invalid', 'valid')
    }
    else inputField.classList.replace('valid', 'invalid')
}
