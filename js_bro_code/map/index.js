//  .map() = accepts a callback and applies that function to each element
//   of an array, then return a new array.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

//----------------------------------------------------------------------------------------------------

const students = ["Spongebob", "Patrick", "Lulamolusco", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);
console.log(studentsUpper);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

//----------------------------------------------------------------------------------------------------

const dates = ["01-10-2024", "02-10-2025", "03-10-2026"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
