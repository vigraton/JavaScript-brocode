/*
    DOM Navigation = The process of navigation through the structure
    of an HTML document using JavaScript

    .firstElementChild
    .lastElementChild
    .nextElementSibling
    .previousElementSibling
    .parentElement
    .children
*/

//const element = document.getElementById("desserts");
//const firstChild = element.firstElementChild;
//firstChild.style.backgroundColor = "lightgreen";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "pink";
});