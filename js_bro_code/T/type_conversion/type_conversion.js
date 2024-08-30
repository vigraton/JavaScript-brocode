// Type conversion = change the datatype of a value to another (strings, number, booleans)

let age = window.prompt("How old are you?");
age = Number(age);19
age+=1;

console.log(age, typeof age);

let x = '';
let y = '';
let z = '0';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);