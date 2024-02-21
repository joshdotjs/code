const button = document.querySelector('button'); // select the button element from the DOM

// add an event listener to the button element - listen for the 'click' event
button.addEventListener('click', () => { // pass a callback function to the event listener - this function will be called when the event is triggered
  alert('you clicked me!'); // the body of this function runs when the function is called (when the button is clicked)
});