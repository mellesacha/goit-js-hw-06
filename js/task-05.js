const userName = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output')

userName.addEventListener('input', OnInput);

function OnInput(event) {
    if (event.currentTarget.value.trim() === '') {
    userNameOutput.textContent = 'Anonymous'
    }
    else userNameOutput.textContent = event.currentTarget.value.trim()

};