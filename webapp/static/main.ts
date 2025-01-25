let resultLabel;

function initializeUI() {
  const body = document.body;
  resultLabel = document.createElement("span");
  resultLabel.innerHTML = "Loading...";
  body.appendChild(resultLabel);
}

function main() {
  initializeUI();
}
document.addEventListener("DOMContentLoaded", main);
