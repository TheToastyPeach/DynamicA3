const buttonM = document.querySelector('#check');

buttonM.addEventListener('change', () => {
    if (buttonM.checked) {
        console.log('The checkbox is checked.');

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {message: "t"}, 
          function(response) {
              var newElement = document.createElement('span');
              newElement.textContent = response.message;
              document.body.appendChild(newElement);
          });
        });
    } else {
      console.log('The checkbox is not checked.');
    }
  });