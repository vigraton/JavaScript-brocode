/* Didn't work ;-;

DOM = DOCUMENT OBJECT MODEL

Object{} that represents the page you see in the web browser
and provides you with an API to interact with it.
Web browser constructs the DOM when it loads an HTML document,
and structures all the elementsin a tree-like representation.
JavaScript can access the DOM to dynamically change the content,
structure, and style of a web page.

document.title = "Hallo";
document.body.style.backgroundcolor = "black";

console.dir(document);
*/

const username = "Vivian";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContext += username === "" ? `Guest` : username;

console.dir(document);