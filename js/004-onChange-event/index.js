const span   = document.querySelector('span');
const input  = document.querySelector('input');

// listen for the 'keyup' event on the input element - when the user releases a key, the event will be triggered - this causes the state of the UI to be in sync with the state of the input element
input.addEventListener('keyup', (event) => {

  // look at the console:
  console.log(event); // the event object stores information about the event that was triggered
  console.log(event.target); // the target property on the event object is the HTML element

  const value = Number( event.target.value );
  span.textContent = value * 2;
});