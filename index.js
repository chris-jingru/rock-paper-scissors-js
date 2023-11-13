const computerChoices = ["rock", "paper", "scissor"];

let computerScore;
let playerScore;

function game(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  let showPlayerSelection = document.createElement("p");
  showPlayerSelection.textContent = `You chose ${playerSelection}`;

  let showComputerSelection = document.createElement("p");
  showComputerSelection.textContent = `Computer chose ${computerSelection}`;

  instructionsArea.innerText = "";
  instructionsArea.append(showPlayerSelection, showComputerSelection);

  if (playerSelection === computerSelection) {
    showComputerSelection.insertAdjacentElement(
      "afterend",
      document.createElement("h2")
    ).textContent = "It's a tie";
  }
}

const display = document.querySelector(".display");
const btn = document.querySelector("button");
const instructionsArea = document.createElement("div");
const choices = document.querySelectorAll(".gesture");

btn.addEventListener("click", addInstructions);

function addInstructions() {
  const h2 = document.createElement("h2");
  h2.textContent = "Pick one above";
  instructionsArea.appendChild(h2);
  display.insertAdjacentElement("afterend", instructionsArea);
  btn.removeEventListener("click", addInstructions);

  choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      h2.remove();
      playerSelect = e.currentTarget.id;
      computerSelect = computerChoices[Math.floor(Math.random() * 3)];
      game(playerSelect, computerSelect);
    });
  });
}
