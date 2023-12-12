const changeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const bodyValue = document.querySelector('body');
changeColor.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  bodyValue.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  color.textContent = bodyValue.style.backgroundColor;
  return;
}
