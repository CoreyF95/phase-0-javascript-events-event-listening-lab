const input = document.getElementById("input");

const clickAlert = () => {
  alert("I was clicked!");
}

function addingEventListener() {
input.addEventListener('click', clickAlert)};

addingEventListener();