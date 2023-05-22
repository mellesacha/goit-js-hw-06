const sliderFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sliderFontSize.addEventListener('input', OnSlide)

function OnSlide(event) {
    text.style.fontSize = `${event.target.value}px`
}

