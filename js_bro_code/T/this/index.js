// this = refrence to the object where THIS is used (the object depends on the 
// immediate context)
// person.name = this name

const person1 = {
    name: "Vivian",
    favFood: "pasta",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`My fav food is ${this.favFood}`)}
};

const person2 = {
    name: "Alan",
    favFood: "BK",
    sayHello: function(){console.log(`Alan's fav food is ${this.favFood}`)},
};

person1.eat();
person2.sayHello();