
const myButton = document.getElementById('myButton');
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }

})

// visibility = reserva um espaço para a imagem. Também dá pra usar o display,
// mas ele não reserva um espaço como o visibilty.