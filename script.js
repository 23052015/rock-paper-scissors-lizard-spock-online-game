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

    }
};

//player choice
function selectChoice() {
player = this.id;
document.getElementById("player-choice").src = `icons/${player}.png`

//computer choice
computer = choices[Math.floor(Math.random() * 5)];
document.getElementById("computer-choice").src = `icons/${computer}.png`

let parsedplayerScore = parseInt(playerScore.innerText)
let parsedcomputerScore = parseInt(computerScore.innerText)

//result check
if (player == computer) {
 
}
else {
    if (player == "rock") {
        if (computer == "scissor") {
           playerScore.innerText = ++parsedplayerScore;
            }
        else if (computer == "lizard") {
            playerScore.innerText = ++parsedplayerScore;
             }
        else if (computer == "paper") {
            computerScore.innerText = ++parsedcomputerScore;
             }
        else if (computer == "spock") {
            computerScore.innerText = ++parsedcomputerScore;
            }
        }

        else if (player == "scissor") {
            if (computer == "paper") {
            playerScore.innerText = ++parsedplayerScore;          
            }
            else if(computer == "lizard") {
            playerScore.innerText = ++parsedplayerScore;
            }
            else if(computer == "rock") {
            computerScore.innerText = ++parsedcomputerScore;
            }
            else if(computer == "spock") {
            computerScore.innerText = ++parsedcomputerScore;
            }
        }    
            else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;          
            }
            else if(computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
            }
            else if(computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
            }
            else if(computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;          
            }
            else if(computer == "paper") {
                 playerScore.innerText = ++parsedplayerScore;
            }
            else if(computer == "scissor") {
                computerScore.innerText = ++parsedcomputerScore;
            }
            else if(computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
            }
        }

        else if (player == "spock") {
            if (computer == "scissor") {
                 playerScore.innerText = ++parsedplayerScore;          
            }
            else if(computer == "rock") {
                 playerScore.innerText = ++parsedplayerScore;
            }
            else if(computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
            }
            else if(computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
            }
        }
    }       
}


