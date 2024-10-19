/*
Callback Hell = Situation in JavaScript where callbacks
are nested within other callbacks to the degree where the
code is difficult to read. Old pattern to handle asychoronous
functions. Use Promises + async/await to avoid Callback Hell
*/

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 done");
        callback();
    }, 3100);    
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 done");
        callback();
    }, 2000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 done");
        callback();
    }, 3500);

}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 done");
        callback();
    }, 4000);

}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks are done!"));
        })
    })
});
