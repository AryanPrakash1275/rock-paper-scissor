let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let i = Math.random()
    if ( i >= 0 && i <= 0.3 ){
        return "rock";
    }
    else if (i > 0.3 && i <= 0.6 ){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let userInput = prompt("Rock, Paper, Scissor ?")
    console.log("User Choice = " + userInput);
    return userInput.toLowerCase();
}

function playRound(){
    let human = getHumanChoice();
    let computer = getComputerChoice();

    console.log("Computer Choice: " + computer);

    if (human === computer){
        console.log("Draw");
    }
    else if(
        (human === "rock" && computer === "scissor") || 
        (human === "paper" && computer === "rock") ||
        (human === "scissor" && computer === "paper")){
            console.log("Player Wins!");
            humanScore++;
        }
    else{
        console.log("Computer Wins");
        computerScore++;
    }    
    console.log("Human Score:" + humanScore, "Computer score:" + computerScore)
}

playRound();