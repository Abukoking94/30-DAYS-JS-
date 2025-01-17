const btn = document.querySelector(".box");
const container = document.querySelector(".container");
const modal = document.querySelector(".text");
const closeModal = document.querySelector(".close");

btn.addEventListener("click", function () {
  modal.style.display = "block";
  modal.style.top = "50%";
  container.style.backgroundColor = "rgb(0, 0, 0, .1)";
});
closeModal.addEventListener("click", function () {
  modal.style.top = "-50%";
  modal.style.display = "block";
  container.style.backgroundColor = "rgb(0, 0, 0,0)";
});
window.addEventListener("click", function (e) {
  if (e.target !== btn && e.target !== modal) {
    modal.style.top = "-50%";
    container.style.backgroundColor = "rgb(0, 0, 0,0)";
  }
});
