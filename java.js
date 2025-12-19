const toggleText = document.getElementById("toggle-text");
const toggleBtn = document.getElementById("toggle-btn");

let isOn = false;

toggleBtn.addEventListener("click", function () {
  toggleText.textContent = isOn ? "OFF" : "ON";
  isOn = !isOn;
});