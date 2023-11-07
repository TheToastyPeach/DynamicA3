
//checking to see if the option is checked or not
//--------------------------------------------------------------
let currentCheck = false; 
const buttonM = document.querySelector('#check');


// Load the initial value of currentCheck from storage
//provided by co-pilot
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
chrome.storage.sync.get('currentCheck', function(data) {
  currentCheck = data.currentCheck || false;
  buttonM.checked = currentCheck;
});

buttonM.addEventListener('change', () => {
  currentCheck = buttonM.checked;
  // Save the new value of currentCheck to storage
  chrome.storage.sync.set({currentCheck: currentCheck}, function() {
    check();
  });
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//--------------------------------------------------------------


//when the option is checked, run check funcion
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'runCheck') {
    check();
  }
});

//Sendin scripts the message to run the check function
function check() {
  console.log('checked value');
  if (currentCheck) {
    console.log('The checkbox is checked.');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "t"});
    });
  } else {
    console.log('The checkbox is not checked.');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "f"});
    });
  };
};