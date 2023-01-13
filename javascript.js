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

// let scorePLayerVar = 0;
// let scoreComputerVar = 0;

const scorePLayer = document.querySelector(".score-message#player");
const scoreComputer = document.querySelector(".score-message#computer");

const displayResult = (playerSelection, computerSelection) => {
  result = playRound(playerSelection, computerSelection);

  if (result === "win") {
    scorePLayer.textContent = Number(scorePLayer.textContent) + 1;
  } else if (result === "lose") {
    scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
  }

  const container = document.querySelector(".container-result");
  const emoji = { rock: "🗿", paper: "🧻", scissors: "✂️" };
  const resultColors = { win: "green", lose: "red", tie: "grey" };

  const messagePlayer =
    document.querySelector("div.result-choice#player") ||
    document.createElement("div");
  messagePlayer.setAttribute("class", "result-choice");
  messagePlayer.setAttribute("id", "player");
  messagePlayer.textContent = `Player ${emoji[playerSelection]}`;
  container.appendChild(messagePlayer);

  const messageResult =
    document.querySelector("div.result-message") ||
    document.createElement("div");
  messageResult.setAttribute("class", "result-message");
  messageResult.style.color = resultColors[result];
  messageResult.textContent = result;
  container.appendChild(messageResult);

  const messageComputer =
    document.querySelector("div.result-choice#computer") ||
    document.createElement("div");
  messageComputer.setAttribute("class", "result-choice");
  messageComputer.setAttribute("id", "computer");
  messageComputer.textContent = `Computer ${emoji[computerSelection]}`;
  container.appendChild(messageComputer);
};

function replayGame() {
  const containerResult = document.querySelector(".container-result");
  while (containerResult.firstChild) {
    containerResult.removeChild(containerResult.firstChild);
  }
  const container = document.querySelector(".container");
  const replayButton = document.querySelector("button.replay");
  container.removeChild(replayButton);
  scorePLayer.textContent = 0;
  scoreComputer.textContent = 0;
}

function createReplay() {
  const container = document.querySelector(".container");
  const replayButton =
    document.querySelector("button.replay") || document.createElement("button");
  replayButton.setAttribute("class", "replay");
  replayButton.textContent = "replay";
  replayButton.addEventListener("click", replayGame);
  container.appendChild(replayButton);
}

const weaponButtons = document.querySelectorAll("button.weapon");
weaponButtons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    createReplay();
    displayResult(playerSelection, computerSelection);
  })
);
