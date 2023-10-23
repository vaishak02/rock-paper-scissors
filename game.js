function getComputerChoice(choice) {
  let chosen_idx = Math.floor(Math.random() * 3);
  const computerChoice = choice[chosen_idx];
  return computerChoice;
}

function oneRound() {
  choice = ["rock", "paper", "scissors"];
  let playerChoice = this.textContent;
  let computerChoice = getComputerChoice(choice);
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i <= 5; i++) {
//     console.log(`Round ${i}:`);
//     const result = oneRound();
//     console.log(result);

//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     }
//   }

//   console.log("Game Over!");
//   console.log(`Player Score: ${playerScore}`);
//   console.log(`Computer Score: ${computerScore}`);

//   if (playerScore > computerScore) {
//     console.log("You win the game!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins the game!");
//   } else {
//     console.log("It's a tie game!");
//   }
// }

const btns = document.querySelectorAll("#btn");
btns.forEach((btn) => {
  btn.addEventListener("click", oneRound);
});
