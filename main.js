let roundsToPlay = 5; 
let playerScore = 0;
let computerScore = 0;

for (let roundNumber = 1; roundNumber <= roundsToPlay; roundNumber++) {
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
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice ? playerChoice.toLowerCase() : ""; 
    return playerChoice;
  }

  const computerChoice = getComputerChoice();
  const playerChoice = getUserChoice();

  console.log("Computer chose: " + computerChoice);
  console.log("Player chose: " + playerChoice);

  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    alert("Invalid choice, please choose 'Rock', 'Paper', or 'Scissors'");
    continue; 
  }

  if (computerChoice === playerChoice) {
    console.log("It's a tie!");
  } else if ((computerChoice === "Rock" && playerChoice === "Paper") ||
             (computerChoice === "Paper" && playerChoice === "Scissors") ||
             (computerChoice === "Scissors" && playerChoice === "Rock")) {
    playerScore++;
    console.log("Player Wins! Score: " + playerScore);
  } else {
    computerScore++;
    console.log("Computer Wins! Score: " + computerScore);
  }
}


console.log("Final Scores - Player: " + playerScore + ", Computer: " + computerScore);