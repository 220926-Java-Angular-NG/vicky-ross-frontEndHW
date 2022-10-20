let section = document.getElementById("column1");

let userInput = document.getElementById("inputBox");

let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', (event) => {
    event.preventDefault();     //default refreshes a page and erases input

        "use strict";
     
         var table = document.getElementById("table");
         var row= document.createElement("tr");
         var td1 = document.createElement("td");
         var td2 = document.createElement("td");
         var td3 = document.createElement("td");    
     
         td1.innerHTML = document.getElementById("genre").value;
         td2.innerHTML  = document.getElementById("artist").value;
         td3.innerHTML  = document.getElementById("track").value;
     
         row.appendChild(td1);
         row.appendChild(td2);
         row.appendChild(td3);
     
         table.children[0].appendChild(row);
     
    /**
    //retrieving input
    //saving value for clearing input sections
    let message = document.getElementById("genre").value;
    let textIn = message.value;
    //retrieving input
    //saving value for clearing input sections
    let message2 = document.getElementById("artist").value;
    let textIn2 = message2.value;
    //retrieving input
    //saving value for clearing input sections
    let message3 = document.getElementById("track").value;
    let textIn3 = message3.value;
    
    //creating new element and inputting them into the table
    let newInput = document.createElement('h4');
    newInput.innerHTML = message;
    let newInput2 = document.createElement('h4');
    newInput2.innerHTML = message2;
    let newInput3 = document.createElement('h4');
    newInput3.innerHTML = message3;

    userInput.appendChild(newInput);
    userInput.appendChild(newInput2);
    userInput.appendChild(newInput3);

    textIn.value = '';
    textIn2.value = '';
    textIn3.value = '';
    */
})