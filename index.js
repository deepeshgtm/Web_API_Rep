const toggleBtn = document.getElementById("toggleBtn");
const textDisplay = document.getElementById("textDisplay");

let isOriginalText = true;

toggleBtn.addEventListener("click", () => {
  if (isOriginalText) {
    textDisplay.textContent = "This is the new text!";
  } else {
    textDisplay.textContent = "This is the initial text";
  }
  isOriginalText = !isOriginalText;
});
