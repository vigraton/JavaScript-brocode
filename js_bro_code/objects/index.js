// object = A collection of related properties and/or methods 
// Can represent real world objects (people, products, places)
// object = {key: value, function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hey, I'm Spongebob!")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 50,
    isEmployed: false,
    sayHello: function(){console.log("Hi, I'm Patrick...")},

}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();