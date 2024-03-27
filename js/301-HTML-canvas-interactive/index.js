// Get the canvas element and its 2D context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Function to draw a circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, true); // Draw a circle
  ctx.fillStyle = 'green';
  ctx.fill();
}

// Add click event listener to the canvas
canvas.addEventListener('click', function(event) {
  // Calculate the correct position of the click inside the canvas
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Draw a circle at the click position
  drawCircle(x, y);
});
