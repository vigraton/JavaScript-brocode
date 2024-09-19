const fruits = [{name: "apple", color: "red", calories: "95"}, 
                {name: "orange", color: "orange", calories: "45"}, 
                {name: "banana", color: "yellow", calories: "105"}, 
                {name: "coconut", color: "white", calories: "159"}, 
                {name: "pineapple", color: "yellow", calories: "37"}];

//console.log(fruits[0].name);
//console.log(fruits[4].calories);

//fruits.push({name: "grapes"}, {color: "purple"}, {calories: 62});

//console.log(fruits);
//console.log(fruits[5].name);

//fruits.pop(); //removes an element

//fruits.splice(1, 2); // will remove elements ar certain indcides

// REDUCE (accumulator, element):

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit);