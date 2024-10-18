const choices = ["pedra", "papel", "tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "EMPATE!";
    }
    else{
        switch(playerChoice){
            case "pedra":
                result = (computerChoice === "tesoura") ? "Você venceu🤬!" : "Você perdeu😈!";
                break;
            case "papel":
                result = (computerChoice === "pedra") ? "Você venceu🤬!" : "Você perdeu😈!";
                break;
            case "tesoura":
                result = (computerChoice === "papel") ? "Você venceu🤬!" : "Você perdeu😈!";
                break;
        }
    }

    playerDisplay.textContent = `Humano: ${playerChoice}`;
    computerDisplay.textContent = `Computador: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "Você venceu🤬!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        
        case "Você perdeu😈!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}