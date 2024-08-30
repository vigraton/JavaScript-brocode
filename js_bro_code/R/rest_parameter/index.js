/* rest parameters: (...rest) allow a function work with a variable
number of arguments by building them into an array

spread = expands an array into seperate elements
rest = bundles seperate elements into an array

*/

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//openFridge(food1, food2, food3, food4, food5);

// ------------------------------------------------------------------------

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants");

console.log(fullName);

// OBS.: Sem o espaço dentro de .join() a saída fica: Mr.,Spongebob,Squarepants
// Só com as "" fica: Mr.SpongebobSquarepants
// Para ficar legível deve ser .join(" ")