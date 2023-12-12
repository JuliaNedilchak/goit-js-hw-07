const inputTask = document.querySelector('#name-input');
const outputTask = document.querySelector('#name-output');

inputTask.addEventListener('input', event => {
  const inputText = event.target.value.trim();
  outputTask.textContent = inputText ? inputText : 'Anonymous';
  return inputText;
});
