/*
string slicing = creatinga substring from a portion of another string
string.slice(start, end)
*/

const fullName = 'Vivian Graton';

let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7, 13);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);

const email = "vihgraton@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);