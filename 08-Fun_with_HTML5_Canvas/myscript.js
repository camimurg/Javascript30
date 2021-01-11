const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // Where we can draw
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if(!isDrawing) return; //stop the function to running when they are not moused down (drawing)
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}; // all this build-in function start up our line, but we're not going to actually see anything on the age until we stroke


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
