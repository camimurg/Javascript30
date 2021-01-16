// Get our element
 const player = document.querySelector('.player');
 const video = player.querySelector('.viewer');
 const progress = player.querySelector('.progress');
 const progressBar = player.querySelector('.progress__filled');
 const toggle = player.querySelector('.toggle'); // button
 const skipButtons = player.querySelectorAll('[data-skip]');
 const ranges = player.querySelectorAll('.player__slider');

 // Build our function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method](); // to access the method's name
};

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

//data-skip
function skip() {
 console.log(this.dataset.skip);
 video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  console.log(this.value)
}

 // Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
