/*
JSON = (JavaScript Object Notation) data-interchange format.
Used for exchanging data between a server and a web application
JSON files {key:value} OR [value1, value2, value3].

JSON.stringify() = converts a JS object to a JSON string.
JSON.parse() = converts a JSON string to a JS object.
*/

const jsonNames = `["Bob Esponja", "Patrick", "Lula Molusco", "Sandy"]`;
const jsonPerson = {
    "name":"Bob Esponja",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "cooking", "karate"]
};

//const jsonString = JSON.stringify(person);

//console.log(person);

const parseData = JSON.parse(jsonNames);
console.log(parseData);