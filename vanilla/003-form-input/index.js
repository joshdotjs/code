const span   = document.querySelector('span');
const button = document.querySelector('button');
const input  = document.querySelector('input');

button.addEventListener('click', () => {

  const value = Number( input.value );
  span.textContent = value * 2;
});
