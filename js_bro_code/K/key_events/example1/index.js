/*
evenListener = Listen for especific events to create interactive web page
events: keydown, keyup
document.addEventListener(event, callback)
*/

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event =>{
    myBox.textContent = "😖";
    myBox.style.backgroundColor = "green";
})

document.addEventListener("keyup", event =>{
    myBox.textContent = "🤨";
    myBox.style.backgroundColor = "purple";
})
