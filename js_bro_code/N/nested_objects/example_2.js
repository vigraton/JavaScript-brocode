
class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("SpongeBob", 29, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 42, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 48, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.address.street);
console.log(person3.name);
console.log(person2.age);