/*
NodeList = Static collection og HTML elements by (id, class, element)
- Can be created by using querySelectorAll()
- Similar to an array, but no (map, filter, reduce)
- NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons"); 

console.log(buttons);

// add HTML/CSS properties

buttons.forEach(button => {
    button.style.backgroundColor = "blue";
    button.textContent += " 🍌";
})