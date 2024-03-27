const error  = document.querySelector('#error');
const input  = document.querySelector('input');
const button = document.querySelector('button');

// ==============================================

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ==============================================

// listen for the 'keyup' event on the input element - when the user releases a key, the event will be triggered - this causes the state of the UI to be in sync with the state of the input element
button.addEventListener('click', (event) => {

  const email = input.value;
  if (isValidEmail(email)) {
    error.textContent = 'Valid email format';
    error.style.color = 'green';
  } else {
    error.textContent = 'Invalid email format';
    error.style.color = 'red';
  }
});