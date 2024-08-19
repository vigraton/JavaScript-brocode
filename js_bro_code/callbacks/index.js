/* callback = a function that is passed as an argurment to another function.

    used to handle asynchronous operations:
    1. Reading a file
    2. Network requests
    3. Interacting with a databases

    "Hey, when you are done, call this next."
*/

hello(leave);


function hello(callback){
    console.log("Hello");
    callback();
}

function bye(){
    console.log("Bye");
}

function leave(){
    console.log("Leave!");
}

// -----------------------------------------------------------------------------

sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}