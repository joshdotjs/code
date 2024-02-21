let count = 0;

const span   = document.querySelector('span');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  count = count + 1;
  span.textContent = count;
});
