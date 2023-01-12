// this code was partially borrowed and updated from
// https://github.com/HimanshuDorbi/Rock-Paper-Scissor/blob/b7a72a41bfe5d78a1d98b65c5cee90c4e6f6d50f/index.js

let choices = ["rock", "paper", "scissor", "lizard", "spock"];
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let player;
let computer;
let rules = document.getElementById("rules");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

//images which load upon loading the page
window.onload = function () {
  for (let i = 0; i < 5; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = "assets/icons/" + choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
    console.log(i);
  }
};
//checking for winner
document.addEventListener("click", function () {
  if (parseInt(playerScore.innerText) >= 10) {
    alert("You won!Click OK to play again");
    playerScore.innerText = 0;
    computerScore.innerText = 0;
  } else if (parseInt(computerScore.innerText) >= 10) {
    alert("Computer won!Click OK to play again");
    playerScore.innerText = 0;
    computerScore.innerText = 0;
  }
});

//player choice
function selectChoice() {
  player = this.id;
  document.getElementById("player-choice").src = `assets/icons/${player}.png`;

  //computer choice
  computer = choices[Math.floor(Math.random() * 5)];
  document.getElementById("computer-choice").src = `assets/icons/${computer}.png`;

  //Score and Message
  let parsedplayerScore = parseInt(playerScore.innerText);
  let parsedcomputerScore = parseInt(computerScore.innerText);
  let result = document.getElementById("result");

  //result check
  if (player == computer) {
    result.innerHTML = "Draw!";
  } else {
    if (player == "rock") {
      if (computer == "scissor") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "lizard") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "paper") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      } else if (computer == "spock") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      }
    } else if (player == "scissor") {
      if (computer == "paper") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "lizard") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "rock") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      } else if (computer == "spock") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      }
    } else if (player == "paper") {
      if (computer == "rock") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "spock") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "scissor") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      } else if (computer == "lizard") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      }
    } else if (player == "lizard") {
      if (computer == "spock") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "paper") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "scissor") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      } else if (computer == "rock") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      }
    } else if (player == "spock") {
      if (computer == "scissor") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "rock") {
        playerScore.innerText = ++parsedplayerScore;
        result.innerHTML = "You Win!";
      } else if (computer == "paper") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      } else if (computer == "lizard") {
        computerScore.innerText = ++parsedcomputerScore;
        result.innerHTML = "You Lose!";
      }
    }
  }
}
//rules
btn.onclick = function () {
  rules.style.display = "block";
};

span.onclick = function () {
  rules.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == rules) {
    rules.style.display = "none";
  }
};
