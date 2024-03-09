const span   = document.querySelector('span');
const button = document.querySelector('button');
const input  = document.querySelector('input');

button.addEventListener('click', () => {

  const value = Number( input.value ); // the value property on the input object is the value of the input field (it is a string type though, so we need to convert it to a number to do math on it)
  span.textContent = value * 2; // write the result of the computation to the span element to see it in the page
});
