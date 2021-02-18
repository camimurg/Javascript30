const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollerLeft;



slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return; // stop the fn from running
  console.count(isDown);
});

