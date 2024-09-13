/*
Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function displayType(thing){
    return `${thing} is of type ${typeof thing}`;
}

console.log(displayType('Vivian'));
console.log(displayType(1.5));
console.log(displayType(true));