/*
evenListener = Listen for specif events to create interactive
web pages events: click, mouseouver, mouseout
.addEventListener(event, callback, arrow function);
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont do it!";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me";
})