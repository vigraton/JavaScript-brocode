// Let's move this little guy

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    myBox.textContent = "😱";
    myBox.style.backgroundColor = "lightgray";
})

document.addEventListener("keyup", event =>{
    myBox.textContent = "🥲";
    myBox.style.backgroundColor = "rgb(0, 255, 204)";
})

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break            
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }

})