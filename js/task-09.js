function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeTools = document.querySelector('.widget');
const colorName = colorChangeTools.querySelector('.color');
const colorChangeBtn = colorChangeTools.querySelector('.change-color');


colorChangeBtn.addEventListener('click', OnColorChange);

function OnColorChange() {
  const color = `${getRandomHexColor()}`
  document.body.style.backgroundColor = `${color}`;
  colorName.textContent = `${color}`;
}