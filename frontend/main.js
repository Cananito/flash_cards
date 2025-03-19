import { generateCardListView } from "./card_list_view.js"
import { generateDeckListView } from "./deck_list_view.js"

let backButton;
let syncButton;
let statusSpan;
let currentViewContainer;
let currentView;

const urlRouteDict = {
  "/cards": {
    generator: generateCardListView,
    isModal: false,
  },
};

function updateUIForCurrentPushState() {
  if (currentView) {
    currentViewContainer.removeChild(currentView);
  }
  const currentPath = location.pathname;
  const urlRoute = urlRouteDict[currentPath];
  if (urlRoute) {
    if (!urlRoute.isModal) {
      backButton.hidden = false;
    }
    currentView = urlRoute.generator();
  } else {
    backButton.hidden = true;
    history.replaceState(null, "", "/");
    currentView = generateDeckListView();
  }
  currentViewContainer.appendChild(currentView);

  // TODO: Use location.search and URL query strings to pass to cards view:
  // https://developer.mozilla.org/en-US/docs/Web/API/Location/search
};

function initializeUI() {
  const body = document.body;

  backButton = document.createElement("button");
  backButton.innerHTML = "Back";
  backButton.addEventListener("click", function(e) {
    history.pushState(null, "", "/");
    updateUIForCurrentPushState();
  });
  backButton.hidden = true;
  body.appendChild(backButton);

  syncButton = document.createElement("button");
  syncButton.innerHTML = "Sync";
  syncButton.addEventListener("click", function(e) {
    fetch("api/sync/").then(function(response) {
      if (!response.ok) {
        throw new Error("Failed :(");
      }
      // TODO: Switch to response.json()
      return response.text();
    }).then(function(text) {
      console.log("Sync response value: " + text.valueOf());
      const now = new Date();
      const nowString = now.toLocaleTimeString();
      statusSpan.innerHTML = "Last synced at " + nowString;
    }).catch(function(reason) {
      statusSpan.innerHTML = "Sync failed horribly :(";
    });
  });
  body.appendChild(syncButton);

  statusSpan = document.createElement("span");
  statusSpan.innerHTML = "Loading...";
  body.appendChild(statusSpan);

  body.appendChild(document.createElement("br"));
  body.appendChild(document.createElement("br"));

  currentViewContainer = document.createElement("div");
  body.appendChild(currentViewContainer);

  updateUIForCurrentPushState();
}

function main() {
  initializeUI();
  window.addEventListener("popstate", updateUIForCurrentPushState);
}
document.addEventListener("DOMContentLoaded", main);
