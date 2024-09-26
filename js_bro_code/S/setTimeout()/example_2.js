
let timeoutId;

function starTimer(){
    setTimeout(() => window.alert("Hi"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}