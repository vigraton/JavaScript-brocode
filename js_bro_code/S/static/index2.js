class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1 = new User("Sponge Bob");
const user2 = new User("Patrick");

//console.log(user1.username);
//console.log(user2.username);

console.log(User.userCount);
user1.sayHello();
user2.sayHello();
User.getUserCount();