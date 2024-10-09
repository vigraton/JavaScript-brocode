const newH1 = document.createElement("h1");

newH1.textContent = "I like coffee";
newH1.id = "myH1";
newH1.style.color = "brown";
newH1.style.textAlign = "center";

document.body.append(newH1);
document.body.prepend(newH1);

//document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);