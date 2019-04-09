chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
  
  let title = document.getElementsByTagName('h1')[0];
  if (title.style.color !== 'red') {
    title.style.color = 'red';
  } else {
    title.style.color = 'black';
  }

  sendResponse({result: "success"});
});