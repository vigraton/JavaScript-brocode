/*
.append()
.prepend()
.body.removeChild()
*/

const newListItem = document.createElement("li");

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.background = "lightgreen";

document.getElementById("box1").append(newLink);