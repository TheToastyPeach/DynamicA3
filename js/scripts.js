
// const ulethLogo = document.getElementById('logoUleth');

// const updateLogo = document.createElement('h1');
// updateLogo.textContent = 'ULeth!';

// ulethLogo.replaceWith(updateLogo);

// const brandheader = document.getElementsByClassName('brand-header');
// brandheader[0].innerHTML = "i love the science commons!";



// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(request.message);
//         document.body.style.backgroundColor = request.message;

//         let newbkg = chrome.runtime.getURL("Photos/sippin.png");
//         document.getElementsByClassName("hero-main")[0].style.backgroundImage = "url('" + newbkg + "')";

//         const newImage = document.createElement('img');
//         newImage.src = newbkg;
//         document.body.appendChild(newImage);



//         sendResponse({message: "Message received!"});
//     }
// );


var tableData = [];

const cells = document.querySelectorAll('td');
var index = 0;
var tableLength = 0;
// Loop through each table cell and replace it with a button element
cells.forEach((cell) => {
    if (tableLength % 2 != 0) {
        if (cell.classList.contains('mpdefault')) {
            // Store the HTML content of the table cell in the tableData array
            tableData[index] = cell.innerHTML;
        
            // Create a new button element and replace the table cell with it
            const button = document.createElement('button');
            button.textContent = cell.innerText;
            cell.parentNode.replaceChild(button, cell);
        
            // Store the HTML content of the button element in the tableData array
            tableData[index] = button.outerHTML;
       
            // Increment the index variable

        };
    };
    index++;
    tableLength++;
    
  });


console.log(tableData);





