/*
    Async = Makes a function return a promise
    Await = Makes an async function wait for a promise

    Allows you write asynchronous code in a synchronous manner.
    Async doesn't have resolve or reject parameters.
    Everything after Await is placed in an event queue
*/

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

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You are done!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();