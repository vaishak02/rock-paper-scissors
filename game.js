const optionBtn = document.querySelectorAll("div.optionBtn button");
const roundResults = document.querySelector("#roundResults");
const playerPoints = document.querySelector("#playerScore");
const computerPoints = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

optionBtn.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

let computerChoices = [
  { choice: "Rock", value: 0 },
  { choice: "Paper", value: 1 },
  { choice: "Scissors", value: 2 },
];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay() {
  let result =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ["1-0", "0-2", "2-1"];

  if (Number(playerSelection) === computerSelection.value) {
    roundResults.textContent = "Tie!";
  } else if (playerWinCombo.includes(roundWinCombo)) {
    playerPoints.textContent = ++playerScore;
    roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
  } else {
    computerPoints.textContent = ++compScore;
    roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
  }
  checkWinner();
}

const winnerResults = {
  computer: ["You Lost the game to a computer!", "red"],
  player: ["You Win the game!!!!", "green"],
  tie: ["The game is a Tie!", "blue"],
};

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore) {
      updateWinner("tie");
    } else {
      let win = `${compScore > playerScore ? "computer" : "player"}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner) {
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  optionBtn.forEach((button) => {
    button.removeEventListener("click", getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}

//old code
// function getComputerChoice(choice) {
//   let chosen_idx = Math.floor(Math.random() * 3);
//   const computerChoice = choice[chosen_idx];
//   return computerChoice;
// }

// function oneRound() {
//   choice = ["rock", "paper", "scissors"];
//   let playerChoice = prompt("Choose Play: ").toLowerCase();
//   let computerChoice = getComputerChoice(choice);
//   if (playerChoice === computerChoice) {
//     return "It's a tie!";
//   }

//   if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
//   ) {
//     return `You win! ${playerChoice} beats ${computerChoice}`;
//   }

//   return `You lose! ${computerChoice} beats ${playerChoice}`;
// }

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
