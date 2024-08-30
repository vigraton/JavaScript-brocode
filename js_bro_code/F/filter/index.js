// .filter() = creates a new array by building out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//-----------------------------------------------------------------------------------

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortwords = words.filter(getShortwords);
const longwords = words.filter(getLongwords);

console.log(shortwords);
console.log(longwords);

function getShortwords(element){
    return element.length <= 6;
}

function getLongwords(element){
    return element.legth > 6;
}