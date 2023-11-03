
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



//Gets all tables
const tables = document.querySelectorAll('table');
//console.log(tables);
var evenTable = 0;


// Loop through each table
tables.forEach((table) => {
    // Create a new div element
    const div = document.createElement('div');

    // Get all td elements in the table
    const tds = table.querySelectorAll('td');

    // Loop through each td
    tds.forEach((td) => {
            // Create a new div for each td element in the table 
            const tdDiv = document.createElement('div');
            tdDiv.innerHTML = td.innerHTML;
            td.parentNode.replaceChild(tdDiv, td);
    });

    div.innerHTML = table.innerHTML;
    table.parentNode.replaceChild(div, table);
});







