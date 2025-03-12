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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //function for one round
  function playRound(humanChoice, computerChoice) {
    humanChoice_upper = humanChoice.toUpperCase();

    if (humanChoice_upper === computerChoice) console.log("It's a Tie!");
    else if (
      (humanChoice_upper === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice_upper === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice_upper === "SCISSORS" && computerChoice === "PAPER")
    ) {
      console.log(`You win! ${humanChoice_upper} beats ${computerChoice}!`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice_upper}!`);
      computerScore++;
    }
  }

  // play game for 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore)
    console.log(
      `You won! Your score: ${humanScore} Computer score: ${computerScore}`
    );
  else if (computerScore > humanScore)
    console.log(
      `You lost! Your score: ${humanScore} Computer score: ${computerScore}`
    );
  else
    console.log(
      `It's a tie! Your score: ${humanScore} Computer score: ${computerScore}`
    );
}
