const span   = document.querySelector('span');
const input  = document.querySelector('input');
console.log('input');

input.addEventListener('keyup', (event) => {
  console.log(event.target); // look at the console - the target property on the event object is the HTML element

  const value = Number( event.target.value );
  span.textContent = value * 2;
});