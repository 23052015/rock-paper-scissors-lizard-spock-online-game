let choices = ["rock", "paper", "scissor", "lizard", "spock"];
let playerScore =document.getElementById("player-score") ;
let computerScore =document.getElementById("computer-score");
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
document.getElementById("player-choice").src = player + ".png";

//computer choice
computer = choices[Math.floor(Math.random() * 5)];
document.getElementById("computer-choice").src = computer + ".png";

let parsedplayerScore = parseInt(playerScore.innerText)
let parsedcomputerScore = parseInt(playerScore.innerText)

//result check
if (player == computer) {
 
}
else {
    if (player == "rock") {
        if (computer == "scissor") {
           playerScore.innerText = parsedplayerScore + 1;
            }
        else if (computer == "lizard") {
            playerScore.innerText = parsedplayerScore + 1;
             }
        else if (computer == "paper") {
            computerScore.innerText = parsedcomputerScore + 1;
             }
        else if (computer == "spock") {
            computerScore.innerText = parsedcomputerScore + 1;
            }
        }

        else if (player == "scissor") {
            if (computer == "paper") {
            playerScore.innerText = parsedplayerScore + 1;          
            }
            else if(computer == "lizard") {
            playerScore.innerText = parsedplayerScore + 1;
            }
            else if(computer == "rock") {
            computerScore.innerText = parsedcomputerScore + 1;
            }
            else if(computer == "spock") {
            computerScore.innerText = parsedcomputerScore + 1;
            }
        }    
            else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = parsedplayerScore + 1;          
            }
            else if(computer == "spock") {
                playerScore.innerText = parsedplayerScore + 1;
            }
            else if(computer == "scissor") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
            else if(computer == "lizard") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = parsedplayerScore + 1;          
            }
            else if(computer == "paper") {
                 playerScore.innerText = parsedplayerScore + 1;
            }
            else if(computer == "scissor") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
            else if(computer == "rock") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
        }

        else if (player == "spock") {
            if (computer == "scissor") {
                 playerScore.innerText = parsedplayerScore + 1;          
            }
            else if(computer == "rock") {
                 playerScore.innerText = parsedplayerScore + 1;
            }
            else if(computer == "paper") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
            else if(computer == "lizard") {
                computerScore.innerText = parsedcomputerScore + 1;
            }
        }
    }       
}

