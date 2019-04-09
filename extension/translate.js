let translateButton = document.getElementById('translate');

let bkg = chrome.extension.getBackgroundPage();

translateButton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    bkg.console.log(tabs[0]);
    chrome.tabs.sendMessage(tabs[0].id, {command: "translate"}, function(response) {
        bkg.console.log(response.result);
    });
  });
};