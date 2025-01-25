let syncButton: HTMLElement;
let resultLabel: HTMLElement;

function initializeUI() {
  const body: HTMLElement = document.body;

  syncButton = document.createElement("button");
  syncButton.innerHTML = "Sync";
  syncButton.addEventListener("click", function(e: Event) {
    fetch("/sync/").then(function(response: Response) {
      if (!response.ok) {
        throw new Error("Failed :(");
      }
      return response.text();
    }).then(function(text: String) {
      resultLabel.innerHTML = text.valueOf();
    }).catch(function(reason) {
      resultLabel.innerHTML = "Failed horribly :(";
    });
  });
  body.appendChild(syncButton);

  resultLabel = document.createElement("span");
  resultLabel.innerHTML = "Loading...";
  body.appendChild(resultLabel);
}

function main() {
  initializeUI();
}
document.addEventListener("DOMContentLoaded", main);
