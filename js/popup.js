
// document.getElementById('blue').addEventListener('click', changeColour);
// document.getElementById('green').addEventListener('click', changeColour);

// function changeColour() {
//     var colour = this.getAttribute("id");
//     console.log(colour);

//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {message: colour}, 
//         function(response) {
//             var newElement = document.createElement('span');
//             newElement.textContent = response.message;
//             document.body.appendChild(newElement);
            
//         });
//     });
// };