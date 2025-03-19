// TODO: Replace all this test code with the real thing.

let testText;
let testButton;
let testContainer;

function randomText() {
  var result = "";
  var lines = Math.floor(Math.random() * 1000);
  for (let index = 0; index < lines; index++) {
    result += index + "<br>";
  }
  return result;
}

export function generateDeckListView() {
  testText = document.createElement("p");
  testText.innerHTML = randomText();

  testButton = document.createElement("button");
  testButton.innerHTML = "Random";
  testButton.addEventListener("click", function(e) {
    testText.innerHTML = randomText();
  });

  testContainer = document.createElement("div");
  testContainer.appendChild(testText);
  testContainer.appendChild(document.createElement("br"));
  testContainer.appendChild(testButton);

  return testContainer;
};
