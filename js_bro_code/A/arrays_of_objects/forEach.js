const fruits = [{name: "apple", color: "red", calories: "95"}, 
    {name: "orange", color: "orange", calories: "45"}, 
    {name: "banana", color: "yellow", calories: "105"}, 
    {name: "coconut", color: "white", calories: "159"}, 
    {name: "pineapple", color: "yellow", calories: "37"}];


fruits.forEach(fruits => console.log(fruits.calories));

const fruitNames = fruits.map(fruit => fruit.name); // para cada fruta, retorne o nome de cada fruta
const fruitColors = fruits.map(fruit => fruit.color); // para cada fruta, retorne a cor de cada fruta

console.log(fruitNames);
console.log(fruitColors);