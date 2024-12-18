

///////////////////////////////////////
// Get modal elements
const modal = document.getElementById("projectModal");
const btn = document.getElementById("viewProjectBtn");
const span = document.getElementsByClassName("close")[0];

// Open the modal when button is clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when 'x' is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
