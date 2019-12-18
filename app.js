//set it up so computer picks a random rock paper scissors. 

let choices = ["rock", "paper", "scissors"];

let play = document.querySelector("button");

play.addEventListener("click", playGame);

function playGame() {

let computerChoice = choices[Math.floor(Math.random()*choices.length)];

playersChoice = prompt("Please enter, rock, paper, or scissors.");

let allChoice = playersChoice.toLowerCase();

    if(computerChoice === "rock" && allChoice === "rock"){
        alert("Computer threw rock. It's a tie. Try again.");
    }
    else if(computerChoice === "rock" && allChoice === "paper"){
        alert("Computer threw rock. You Win!")
    }
    else if(computerChoice === "rock" && allChoice === "scissors"){
        alert("Computer threw rock. You lose")
    }
    else if(computerChoice === "paper" && allChoice === "paper"){
        alert("Computer threw paper. It's a tie. Try again.")

    }
    else if(computerChoice === "paper" && allChoice === "rock"){
        alert("Computer threw paper. You Win")
    }
    else if(computerChoice === "paper" && allChoice === "scissors"){
        alert("Computer threw paper. You lose.")
    }
    else if(computerChoice === "scissors" && allChoice === "scissors"){
        alert("Computer threw scissors. It's a tie. Try again")
    }
    else if(computerChoice === "scissors" && allChoice === "rock"){
        alert("Computer threw scissors. You lose.")
    }
    else if(computerChoice === "scissors" && allChoice === "paper"){
        alert("Computer threw scissors. You win.")
    }
}