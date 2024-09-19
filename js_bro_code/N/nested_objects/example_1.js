/*
Nested Objects = Objects inside of other objects.
Allows you to represent more complex data structures
Child Object is enclosed by a Parent Object

Person{Address{}, ContactInfo{}, ShoppingCart{}, Mouse{}, Monitor{}}
*/

const person = {
    fullName: "SpongeBob SquarePants",
    age: 30,
    hobbies:["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom", 
        country: "Int. water"
    }
}

console.log(person.fullName);
console.log(person.hobbies[0]);
//console.log(person.address.street);
//console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}