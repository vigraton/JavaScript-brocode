/*
Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

//let thing;

function displayType(thing){
    return `${thing}`, typeof thing;
}

console.log(displayType(5));