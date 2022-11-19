let choices = ["rock", "paper", "scissor", "lizard", "spock"];
let playerScore = document.getElementById("player-score") ;
let computerScore = document.getElementById("computer-score");
let player;
let computer;



window.onload = function() {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "icons/" +  choices[i] + ".png"; 
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
        console.log(i);

    }

    
};



//player choice
function selectChoice() {
player = this.id;
document.getElementById("player-choice").src = `icons/${player}.png`;

//computer choice
computer = choices[Math.floor(Math.random() * 5)];
document.getElementById("computer-choice").src = `icons/${computer}.png`;

//Score and Message
let parsedplayerScore = parseInt(playerScore.innerText);
let parsedcomputerScore = parseInt(computerScore.innerText);
let result = document.getElementById('result');


//result check
if (player == computer) {
    result.innerHTML = 'Draw!';
}
else {
    if (player == "rock") {
        if (computer == "scissor") {
           playerScore.innerText = ++parsedplayerScore;
           result.innerHTML = 'You Win!';
    }
        else if (computer == "lizard") {
            playerScore.innerText = ++parsedplayerScore;
            result.innerHTML = 'You Win!';
             }
        else if (computer == "paper") {
            computerScore.innerText = ++parsedcomputerScore;
            result.innerHTML = 'You Lose!';
             }
        else if (computer == "spock") {
            computerScore.innerText = ++parsedcomputerScore;
            result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "scissor") {
            if (computer == "paper") {
            playerScore.innerText = ++parsedplayerScore;
            result.innerHTML = 'You Win!';          
            }
            else if(computer == "lizard") {
            playerScore.innerText = ++parsedplayerScore;
            result.innerHTML = 'You Win!';
            }
            else if(computer == "rock") {
            computerScore.innerText = ++parsedcomputerScore;
            result.innerHTML = 'You Lose!';
            }
            else if(computer == "spock") {
            computerScore.innerText = ++parsedcomputerScore;
            result.innerHTML = 'You Lose!';
            }
        }    
            else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';          
            }
            else if(computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if(computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if(computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';          
            }
            else if(computer == "paper") {
                 playerScore.innerText = ++parsedplayerScore;
                 result.innerHTML = 'You Win!';
            }
            else if(computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if(computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "spock") {
            if (computer == "scissor") {
                 playerScore.innerText = ++parsedplayerScore;
                 result.innerHTML = 'You Win!';          
            }
            else if(computer == "rock") {
                 playerScore.innerText = ++parsedplayerScore;
                 result.innerHTML = 'You Win!';
            }
            else if(computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if(computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }
        
    
    }       

    
}

function gameOver() {
    if (playerScore === 20 && computerScore < 15){
        alert("You won! Click OK to play again.");
        playerScore = 0;
        computerScore = 0;
    }

    else if (playerScore < 20 && computerScore === 20){
        alert("You lost! Click OK to play again.");
        playerScore = 0;
        computerScore = 0;
    }

}    

gameOver();





