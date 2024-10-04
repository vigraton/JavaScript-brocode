/*

Element Selector = Methods used to targed and manipulate HTML
elements. They allow you to select one or multiple HTML elements
from the DOM (Document Object Model)

1. document.getElementById(): Element or null
2. document.getElementClassName(): HTML collection
3. document.getElementByTagName(): HTML collection
4. document.querySelector(): First Element or null
5. document.querySelectorAll(): Nodelist

*/

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);