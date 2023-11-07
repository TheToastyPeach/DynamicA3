
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




//selecting by summary (who knew this would actually prove useful)
const title = document.querySelectorAll('.plaintable[summary = "This is main table for displaying Tab Items."]');
// const list = document.createElement('ul.nav');
title.forEach((title) => { 
    const div = document.createElement('div');
    div.classList.add('navDiv');
    var evenTable = 0;
        const tds = title.querySelectorAll('td');
        tds.forEach((td) => {
            if (evenTable % 2 != 0) {
                td.remove();
            } else {

                const tdDiv = document.createElement('div');
                tdDiv.classList.add('burger');
                tdDiv.innerHTML = td.innerHTML;
                // Replace the td element with the new div element
                td.parentNode.replaceChild(tdDiv, td);



                            const aElement = tdDiv.querySelectorAll('a');
                            // cycle through all menu options to format them 
                            aElement.forEach((aElement) => {
                                //console.log(href);
                                const listItem = document.createElement('button');
                                listItem.textContent = aElement.textContent;
                                listItem.classList.add('btn-nav');
                                //sets a data-href attribute to the list item for nav
                                listItem.dataset.href = aElement.href; 
                                aElement.parentNode.replaceChild(listItem, aElement);



                            });


            };
        evenTable++;



            // Check for button clicks
        document.addEventListener('click', function (event) {
        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('.btn-nav')) return;
        var href = event.target.dataset.href;
        console.log("clicked");
        //changes the window location to the href of the button when its clifcked
        window.location.href = href;
    });
        });
    div.innerHTML = title.innerHTML;
    title.parentNode.replaceChild(div, title);
});

// // Nav Table targeting
// //-------------------------------------------------------------
// //Using the same code used to edit the main tables above to remove empty table elements
// const title = document.querySelectorAll('.plaintable');
// const list = document.createElement('ul.nav-links');
// title.forEach((title) => { 
//     const div = document.createElement('div');
//     div.classList.add('burger');
//     var evenTable = 0;
//     const tds = title.querySelectorAll('td');
//     tds.forEach((td) => {
//         if (evenTable % 2 != 0) {
//                 td.remove();
//         } else {
//             const listItem = document.createElement('li');
//             listItem.innerHTML = td.innerHTML;
//             list.replaceChild(listItem, td);
//         };
//     evenTable++;
//     });
// });


                // // Table inside of a table
                // const navTable = document.querySelectorAll('.plaintable[summary = "This table displays Tab Items."]');
                // navTable.forEach((navTable) => {
                //     const li = document.createElement('li');
                //     li.classList.add('nav-link');
                //     const naVtds = title.querySelectorAll('td');
                //     var eventTable2 = 0;
                //     naVtds.forEach((td) => {
                //         if (eventTable2 % 2 != 0) {
                //             td.remove();
                //         } else {



// Main table display targeting
//-------------------------------------------------------------
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
            // Select the span element
            var newSpan = td.querySelector('span');
            //check if there is a span
            if (newSpan) {
                // split the text into words - co-pilot code
                var words = newSpan.textContent.split(' ');

                // check if the wrods are greater than 35
                if (words.length > 35) {
                    // Get the first 35 words - co-pilot code
                    var limitedWords = words.slice(0, 35);
                    // join the words back together and update the span text - co-pilot code
                    newSpan.textContent = limitedWords.join(' ') + '...';
                }
            }
            //create a div element with the new span element
            tdDiv.innerHTML = td.innerHTML;
            // Replace the td element with the new div element
            td.parentNode.replaceChild(tdDiv, td);
            const aElement = tdDiv.querySelector('a');

            // Choosing only the 1st element in an <a> to change into a button
            if(aElement) {
                    //console.log(href);
                    const tempButton = document.createElement('button');
                    tempButton.textContent = aElement.textContent;
                    tempButton.classList.add('btn');
                    //sets a data-href attribute to the button to be accessed later
                    tempButton.dataset.href = aElement.href; 
                    aElement.parentNode.replaceChild(tempButton, aElement);
            };
        } else {
            // Remove the empty td elements from the table (Not sure why they are there to being with)
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
//-------------------------------------------------------------









