const containerWindow = document.querySelector(".window-container");
const containerResult = document.querySelector(".container-result");
const emoji = { rock: "🗿", paper: "🧻", scissors: "✂️" };
const resultColors = { win: "green", lose: "red", tie: "grey" };
const weaponButtons = document.querySelectorAll("button.weapon");

let scorePLayer = 0;
let scoreComputer = 0;

function initializeScores() {
  scorePLayer = 0;
  scoreComputer = 0;
}

function updateScores() {
  document.querySelector(".score-message#player").textContent = scorePLayer;
  document.querySelector(".score-message#computer").textContent = scoreComputer;
}

let getComputerChoice = () => {
  const weapons = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * weapons.length);
  return weapons[randomChoice];
};

let getResult = (playerSelection, computerSelection) => {
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

const playRound = (playerSelection, computerSelection) => {
  // getting result and updating scores
  result = getResult(playerSelection, computerSelection);

  if (result === "win") {
    scorePLayer++;
  } else if (result === "lose") {
    scoreComputer++;
  }
  updateScores();

  // creating or updating the Player choice message
  if (document.querySelector("div.result-choice#player")) {
    const messagePlayer = document.querySelector("div.result-choice#player");
    messagePlayer.textContent = `Player ${emoji[playerSelection]}`;
  } else {
    const messagePlayer = document.createElement("div");
    messagePlayer.setAttribute("class", "result-choice");
    messagePlayer.setAttribute("id", "player");
    messagePlayer.textContent = `Player ${emoji[playerSelection]}`;
    containerResult.appendChild(messagePlayer);
  }

  // creating or updating the Result message
  if (document.querySelector(".result-message")) {
    const messageResult = document.querySelector(".result-message");
    messageResult.style.color = resultColors[result];
    messageResult.textContent = result;
  } else {
    const messageResult = document.createElement("div");
    messageResult.setAttribute("class", "result-message");
    messageResult.style.color = resultColors[result];
    messageResult.textContent = result;
    containerResult.appendChild(messageResult);
  }

  // creating or updating the Computer choice message
  if (document.querySelector("div.result-choice#computer")) {
    const messageComputer = document.querySelector(
      "div.result-choice#computer"
    );
    messageComputer.textContent = `Computer ${emoji[computerSelection]}`;
  } else {
    const messageComputer = document.createElement("div");
    messageComputer.setAttribute("class", "result-choice");
    messageComputer.setAttribute("id", "computer");
    messageComputer.textContent = `Computer ${emoji[computerSelection]}`;
    containerResult.appendChild(messageComputer);
  }
};

// Assigning play round to each button
weaponButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    createReplay();
  })
);

// creating if not exist the replay button
function createReplay() {
  const replayButton =
    document.querySelector("button.replay") || document.createElement("button");
  replayButton.setAttribute("class", "replay");
  replayButton.textContent = "replay";
  replayButton.addEventListener("click", replayGame);
  containerWindow.appendChild(replayButton);
}

function replayGame() {
  containerResult.innerHTML = "";
  const replayButton = document.querySelector("button.replay");
  containerWindow.removeChild(replayButton);
  initializeScores();
  updateScores();
}

window.addEventListener("load", initializeScores);
window.addEventListener("load", updateScores);
