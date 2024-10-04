// document.getElementClassName

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "pink";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "blue";
});

console.log(fruits);