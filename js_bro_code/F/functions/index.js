

function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Vivian", 19);
//happyBirthday("Spongebob", 30);
//happyBirthday("Patrick", 37);

function add(x,y){
    return x + y;
}
function substract(x,y){
    return x - y;
}
function divide(x,y){
    return x / y;
}
function isEven(number){
    
    return number % 2 === 0 ? true : false;
}
function validEmail(email){
    return  email.includes("@") ? true : false;
}

console.log(validEmail("vivian@gmail.com"));
console.log(isEven(23));

