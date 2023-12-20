function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Rock";
  } else {
    return "Scissors";
  }
}

function getUserChoice() {
  const playerChoice = prompt("Rock, Paper, or Scissors?");
  return playerChoice.toLowerCase(); 
}

const computerChoice = getComputerChoice();
const playerChoice = getUserChoice();

console.log("Computer chose: " + computerChoice);
console.log("Player chose: " + playerChoice);

if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
  alert("Invalid choice, please choose 'Rock, Paper, or Scissors?'")
}

if (getComputerChoice === playerChoice) {
  console.log("It's a tie!");
} else if (computerChoice === "Rock" && playerChoice === "Paper") {
  console.log("Player Wins!");
} else if (computerChoice === "Paper" && playerChoice === "Scissors") {
  console.log("Player Wins!");
} else if (computerChoice === "Scissors" && playerChoice === "Rock") {
  console.log("Player Wins!");
} else {
  console.log("Computer Wins!");
}