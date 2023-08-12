const computerChoices = ["rock", "paper", "scissor"];

let computerSelect = computerChoices[Math.floor(Math.random() * 3)];

let playerSelect = prompt("paper, scissor or rock ? Pick One").toLowerCase();

function getGameResult(playerSelection, computerSelection) {
  if (
    playerSelection != "paper" &&
    playerSelection != "rock" &&
    playerSelection != "scissor"
  ) {
    alert("Invalid Input!");
  } else if (computerSelection == playerSelection) {
    alert("U tied!");
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    alert("U win!");
  } else if (computerSelection == "rock" && playerSelection == "scissor") {
    alert("U lose!");
  } else if (computerSelection == "paper" && playerSelection == "scissor") {
    alert("u Win!");
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    alert("U lose!");
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    alert("U lose !");
  } else if (computerSelection == "scissor" && playerSelection == "rock") {
    alert("U win!");
  }
}

console.log(playerSelect);
console.log(computerSelect);

console.log(getGameResult(playerSelect, computerSelect));
