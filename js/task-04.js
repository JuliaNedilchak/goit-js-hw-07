const form = document.querySelector('.login-form');
form.addEventListener('submit', submitFunction);
function submitFunction(event) {
  event.preventDefault();
  const formValue = event.target;
  const password = formValue.elements.password.value.trim();
  const email = formValue.elements.email.value.trim();
  if (password === '' || email === '') {
    alert('All form fields must be filled in');
  }
  console.log(`password: ${password}, email: ${email}`);
  form.reset();
}
const button = document.querySelector('button');
button.style.backgroundColor = 'rgba(78, 117, 255, 1)';
button.style.fontSize = '16px';
button.style.color = 'rgba(255, 255, 255, 1)';
button.style.marginTop = '10px';
button.style.letterSpacing = '0.64px';
button.style.padding = '8px 16px';
button.style.borderRadius = '8px';
button.style.lineHeight = '1.5';
