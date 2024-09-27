/*
Error = An object that is created to represent a problem that occurs.
Occur often with user input or establishing a connection.

- try { } = Encloses code that might potencially cause an error
- catch { } = Catch and handle any thrown Errors from try { }
- finally { } = (optional) Always executes. Used mostly for clean up
ex.: close files, close connections, release resources.
*/


try{
    console.log("Hallooo");
    // Network errors
    // Promise rejection
    // Security errors
}

catch(error){
    console.error(error);
}

finally{
    // Close files
    // Close connections
    // Release resources
    console.log("This always works");
}

console.log("The end");