function getComputerChoice(choice) {
  let chosen_idx = Math.floor(Math.random() * 3);
  const computerChoice = choice[chosen_idx];
  return computerChoice;
}

function oneRound() {
  choice = ["rock", "paper", "scissors"];
  let playerChoice = prompt("Choose Play: ").toLowerCase();
  let computerChoice = getComputerChoice(choice);
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  }

  return `You lose! ${computerChoice} beats ${playerChoice}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    const result = oneRound();
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  console.log("Game Over!");
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}
