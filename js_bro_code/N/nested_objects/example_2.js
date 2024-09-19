
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

const person1 = new Person("Vivian", 19, "544 Taipas", "SP", "Brasil");
const person2 = new Person("Alan", 22, "544 Taipas", "SP", "Brasil");
const person3 = new Person("Laura", 18, "253 Rua Arataji", "SP", "Brasil");

console.log(person1.address.street);
console.log(person3.name);
console.log(person2.age);