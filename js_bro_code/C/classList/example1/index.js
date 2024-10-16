/*
classList = Element porperty in JavaScript used to interact
with and element's list of classes (CSS classes).
Allows you to male reusable classes for many elements across
your webpage.

add()
remove()
toggle(Remove if present, Add if not)
replace(oldClass, newClass)
contains()
*/

const myButton = document.getElementById("myButton");

//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
})

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
})