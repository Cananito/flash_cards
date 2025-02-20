// TODO: Replace all this test code with the real thing.

let testText: HTMLParagraphElement;
let testButton: HTMLButtonElement;
let testContainer: HTMLDivElement;

function randomText(): string {
  var result: string = "";
  var lines: number = Math.floor(Math.random() * 1000);
  for (let index: number = 0; index < lines; index++) {
    result += index + "<br>";
  }
  return result;
}

export function generateDeckListView(): HTMLElement {
  testText = document.createElement("p");
  testText.innerHTML = randomText();

  testButton = document.createElement("button");
  testButton.innerHTML = "Random";
  testButton.addEventListener("click", function(e: Event) {
    testText.innerHTML = randomText();
  });

  testContainer = document.createElement("div");
  testContainer.appendChild(testText);
  testContainer.appendChild(document.createElement("br"));
  testContainer.appendChild(testButton);

  return testContainer;
};
