const computerChoices = ["rock", "paper", "scissor"];

let computerSelect;
//  = computerChoices[Math.floor(Math.random() * 3)];
let playerSelect;
// = prompt("paper, scissor or rock ? Pick One").toLowerCase();

let computerScore = 0;
let playerScore = 0;
function playSingleRound(playerSelection, computerSelection) {
  if (
    playerSelection != "paper" &&
    playerSelection != "rock" &&
    playerSelection != "scissor"
  ) {
    alert("Invalid Input!");
  } else if (computerSelection == playerSelection) {
    alert("U tied!");
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore++;
    alert("U win!");
  } else if (computerSelection == "rock" && playerSelection == "scissor") {
    computerScore++;
    alert("U lose!");
  } else if (computerSelection == "paper" && playerSelection == "scissor") {
    playerScore++;
    alert("u Win!");
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore++;
    alert("U lose!");
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    computerScore++;
    alert("U lose !");
  } else if (computerSelection == "scissor" && playerSelection == "rock") {
    playerScore++;
    alert("U win!");
  }

  return [playerScore, computerScore];
}

// game function to run the previous playSingleRound 5 times, and return the computer score and player score after 5 times, and based on the result, determine the final winner.

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelect = computerChoices[Math.floor(Math.random() * 3)];
    playerSelect = prompt("paper, scissor or rock ? Pick One").toLowerCase();
    playSingleRound(playerSelect, computerSelect);
  }

  const Result = [playerScore, computerScore];
  console.log(Result);

  if (Result[0] > Result[1]) {
    alert("u win! yeah");
  } else if (Result[0] < Result[1]) alert("U lose, no!");
  alert("tied!!!");
}

game();
