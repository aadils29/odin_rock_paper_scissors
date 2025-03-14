function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function getHumanChoice() {
  const choice = prompt("Choose between Rock, Paper, or Scissors");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

let game = document.querySelector("#game");
let score = document.querySelector("#score");

function updateScore() {
  score.textContent = `Your score: ${humanScore} Computer Score: ${computerScore}`;
}

updateScore();

function playRound(humanChoice, computerChoice) {
  humanChoice_upper = humanChoice.toUpperCase();

  if (humanChoice_upper === computerChoice) {
    game.textContent = `You chose ${humanChoice_upper} and the computer chose ${computerChoice}.`;
    game.textContent = "It's a Tie!";
  } else if (
    (humanChoice_upper === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice_upper === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice_upper === "SCISSORS" && computerChoice === "PAPER")
  ) {
    game.textContent = `You chose ${humanChoice_upper} and the computer chose ${computerChoice}.`;
    game.textContent = `You win! ${humanChoice_upper} beats ${computerChoice}!`;
    humanScore++;
    updateScore();
    if (humanScore >= 5 || computerScore >= 5) displayWinner();
  } else {
    game.textContent = `You chose ${humanChoice_upper} and the computer chose ${computerChoice}.`;
    game.textContent = `You lose! ${computerChoice} beats ${humanChoice_upper}!`;
    computerScore++;
    updateScore();
    if (humanScore >= 5 || computerScore >= 5) displayWinner();
  }
}

function displayWinner() {
  if (humanScore > computerScore)
    game.textContent = `You won! Your score: ${humanScore} Computer score: ${computerScore}`;
  else if (computerScore > humanScore)
    game.textContent = `You lost! Your score: ${humanScore} Computer score: ${computerScore}`;
  else
    game.textContent = `It's a tie! Your score: ${humanScore} Computer score: ${computerScore}`;
  humanScore = 0;
  computerScore = 0;
  updateScore();
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
  playRound("ROCK", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("PAPER", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("SCISSORS", getComputerChoice());
});
