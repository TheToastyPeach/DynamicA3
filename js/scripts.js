
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



//Gets all tables with the class menuplaintable
const tables = document.querySelectorAll('table.menuplaintable');
//console.log(tables);
var evenTable = 0;
var href;

// Loop through each table
tables.forEach((table) => {
    // Create a new div element to containt the new elements 
    const div = document.createElement('div');
    div.classList.add('prettyDiv');

    // Get all td elements in the table
    const tds = table.querySelectorAll('td');

    // Loop through each td
    tds.forEach((td) => {
        //Removing the empty table elements 
        if (evenTable % 2 != 0) {
            // Create a new div for each td element in the table 
            const tdDiv = document.createElement('div');
            tdDiv.classList.add('buttonBox');
            tdDiv.innerHTML = td.innerHTML;
    
            // Replace the td element with the new div element
            td.parentNode.replaceChild(tdDiv, td);
    
            const aElement = tdDiv.querySelector('a');
    
            // Choosing only the 1st element in an <a> to change into a button
            if(aElement) {
                    console.log(href);
                    const tempButton = document.createElement('button');
                    tempButton.textContent = aElement.textContent;
                    tempButton.classList.add('btn');
                    //sets a data-href attribute to the button to be accessed later
                    tempButton.dataset.href = aElement.href; 
                    aElement.parentNode.replaceChild(tempButton, aElement);
            };
        } else {
            // Remove the empty td element from the table
            td.remove();
        }
        evenTable++;
    });

    // Check for button clicks
    document.addEventListener('click', function (event) {
        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('.btn')) return;
        var href = event.target.dataset.href;
        console.log("clicked");
        //changes the window location to the href of the button when its clifcked
        window.location.href = href;
    });
    
    div.innerHTML = table.innerHTML;
    table.parentNode.replaceChild(div, table);
});









