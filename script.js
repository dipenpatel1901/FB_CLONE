function both() {
  openForm();
  toggle();
}

function bothc() {
  closeForm();
  toggle();
}

function openForm() {
  document.getElementById("floatform").style.display = "block";
}

function toggle() {
  var blur = document.getElementById("globe");
  blur.classList.toggle("active");

  var pop = document.getElementById("globe");
  pop.classList.toggle("inactive");
}

function closeForm() {
  document.getElementById("floatform").style.display = "none";
}
