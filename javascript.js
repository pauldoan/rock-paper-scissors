let getComputerChoice = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * weapons.length);
  return weapons[randomChoice];
};

let getPlayerChoice = () => {
  let playerChoice = prompt("Select your weapon!");
  return playerChoice.toLowerCase();
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "lose";
  } else {
    return "win";
  }
};

let game = () => {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    console.log("Round " + i);
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    let result = playRound(playerChoice, computerChoice);
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    console.log("result: " + result);
    if (result === "win") {
      score++;
    } else if (result === "lose") {
      score--;
    }
  }
  let winner;
  if (score >= 0) {
    winner = "player";
  } else if (score < 0) {
    winner = "computer";
  } else winner = "tie";
  console.log("And the winner is..." + winner + "!");
};

game();
