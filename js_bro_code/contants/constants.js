// const = a variable that can't be changed

let PI = 3.14259;
let radius;
let circumference;

circumference = 2 * PI * radius;

document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference + 'cm';
}
