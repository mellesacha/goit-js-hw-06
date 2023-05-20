function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputcontrols = controls.querySelector('input');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

inputcontrols.addEventListener('input', OnInput);

function OnInput(event) {
  inputcontrols.setAttribute('counter', +event.currentTarget.value)
  console.log(event.currentTarget.value)
};

btnCreate.addEventListener('click', createBoxes);

function createBoxes() {
  let amount = inputcontrols.getAttribute('counter');
  let boxSize = 20;
  if (amount <= +inputcontrols.getAttribute('max')) {
    for (let i = 0; i < amount; i++){
    const newBox = document.createElement("div");
    boxSize += 10;
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.append(newBox);
  }
  }
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
  inputcontrols.removeAttribute('counter');
  inputcontrols.value = '';

} 
  
