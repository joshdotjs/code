let count = 0; // state variable - acts as a 'closure' to the callback function passed into the event listener - a closure is basically a variable defined outside of the scope of a function so the state of the variable is persistent between function invocations

const span   = document.querySelector('span');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  count = count + 1; // increment the state variable's value by 1
  span.textContent = count; // write the result to the UI
});
