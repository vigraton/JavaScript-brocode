// Method chaining = calling one method after another in one continuous line of code.

let username = window.prompt("Enter your username: ");
username = username.trim();

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);