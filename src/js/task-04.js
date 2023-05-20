const btnDecrease = document.querySelector('[data-action="decrement"]');
const btnIncrease = document.querySelector('[data-action="increment"]');

const totalClick = document.querySelector('#value');

let counterValue = 0;

btnDecrease.addEventListener('click', onBtnDecreaseClick)

function onBtnDecreaseClick(event) {
    counterValue -= 1;
    totalClick.textContent = `${counterValue}`
}

btnIncrease.addEventListener('click', onBtnIncreaseClick)

function onBtnIncreaseClick(event) {
    counterValue += 1;
    totalClick.textContent = `${counterValue}`
}