const fruits = [{name: "apple", color: "red", calories: "95"}, 
    {name: "orange", color: "orange", calories: "45"}, 
    {name: "banana", color: "yellow", calories: "105"}, 
    {name: "coconut", color: "white", calories: "159"}, 
    {name: "pineapple", color: "yellow", calories: "37"}];


const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits);
console.log(lowCalFruits);