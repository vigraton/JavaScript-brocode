/*
Promise = An Object that manages asynchronous operations.
Wrap a Promise Object around {asynchronous code}.
"I promise to return a value"
PENDING -> RESOLVE or REJECTED
new Promise((resolve, reject) => {asynchronous code})

DO THESE CHORES IN ORDER

1. Walk the dog
2. Clean the kitchen
3. Take out the trash
*/

//const { error } = require("console");

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedKitchen = true;

            if(cleanedKitchen){
                resolve("You clean the kitchen");
            }
            else{
                reject("You DIDN'T CLEAN THE KITCHEN")
            }
        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() =>{

            const takenOutTrash = false;

            if(takenOutTrash){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all chores!")})
        .catch(error => console.error(error));