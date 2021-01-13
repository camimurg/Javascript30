const checkboxes = document.querySelectorAll('.inbox input[type="checkbox');

let lastChecked;

function handleCheck(e) {
  // check if they had the schift key down
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
