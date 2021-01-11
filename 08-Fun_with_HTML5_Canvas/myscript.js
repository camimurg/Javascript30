const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); // Where we can draw
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if(!isDrawing) return; //stop the function to running when they are not moused down (drawing)
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
 // all this build-in function start up our line, but we're not going to actually see anything on the age until we stroke
  [lastX, lastY] = [e.offsetX, e.offsetY]; // destructuring an array: lastX define e.offsetX and lastY define e.offsetY
  hue++;
};

canvas.addEventListener('mousedown', (e) => {isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
