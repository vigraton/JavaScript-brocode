const people = [{name: "Vivian", age: 19, gpa: 3.0}, 
                {name: "Jessica", age: 49, gpa: 1.5},
                {name: "Bruno", age: 22, gpa: 4.0}, 
                {name: "Lucas", age: 38, gpa: 2.5}];

people.sort((a, b) => a.age - b.age);
console.log(people);
// Do mais novo para o mais velho

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);
// Do menor gpa para o maior. Se fosse b.gpa - a.gpa seria ao contrário

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Organiza os nomes em ordem alfabética