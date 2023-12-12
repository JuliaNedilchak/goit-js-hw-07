function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputType = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonRemove = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const array = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const block = document.createElement('div');
    size += 10;
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = getRandomHexColor();
    array.push(block);
  }

  boxes.append(...array);
}

buttonCreate.addEventListener('click', () => {
  boxes.innerHTML = '';
  const amount = inputType.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputType.value = '';
  }
});

function destroyBoxes() {
  boxes.innerHTML = '';
  return boxes;
}
buttonRemove.addEventListener('click', destroyBoxes);

inputType.style.width = '150px';
inputType.style.alignItems = 'center';
inputType.style.justifyContent = 'center';
inputType.style.textAlign = 'center';
inputType.style.fontSize = '16px';
inputType.style.lineHeight = '1.5';
inputType.style.borderRadius = '8px';
inputType.style.border = '1px solid #808080';
inputType.style.color = 'rgba(46, 47, 66, 1)';
buttonCreate.style.padding = '8px 16px';
buttonCreate.style.width = '120px';
buttonCreate.style.borderRadius = '8px';
buttonCreate.style.backgroundColor = 'rgba(78, 117, 255, 1)';
buttonCreate.style.color = 'rgba(255, 255, 255, 1)';
buttonCreate.style.fontSize = '16px';
buttonCreate.style.lineHeight = '1.5';
buttonRemove.style.backgroundColor = 'rgba(255, 78, 78, 1)';
buttonRemove.style.color = 'rgba(255, 255, 255, 1)';
buttonRemove.style.fontSize = '16px';
buttonRemove.style.lineHeight = '1.5';
buttonRemove.style.borderRadius = '8px';
buttonRemove.style.width = '120px';
buttonRemove.style.padding = '8px 16px';
