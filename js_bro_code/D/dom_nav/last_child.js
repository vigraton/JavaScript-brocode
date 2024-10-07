// Last Element Child

const element = document.querySelector("ul");

element.forEach(element => {
    const lastChild = element.lastElementChild;
    lastChild.style.backgroundColor = "red";
});