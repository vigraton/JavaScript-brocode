// How to accept user input


// 1. Easy way = window prompt
//let username;
//username = window.prompt("What's your username?");
//console.log(username);


// 2. Professional way = html text box

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Salut ${username}`;
}
