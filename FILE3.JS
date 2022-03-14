// get computer selection
function computerPlay() {
  // generate a random value between 0 and 2
  let seed = Math.floor(Math.random() * 3);
  return seed;
}

// get user selection
function playerPlay() {
  // it lacks implementation for user error
  let userSelection = prompt("Enter your choice: rock, paper or scissors: ");
  return userSelection;
}

// play a round of the game
function playRound(playerSelection, computerSelection, game) {
  //  check playerSelection against computerSelection, case-insensitive.
  let user = game.gameValues.indexOf(playerSelection.toLowerCase());
  let computer = game.gameValues.indexOf(computerSelection.toLowerCase());

  return game.gameRules[user][computer];
}

// Define game rules and values
function getGameRules() {
  /*
  /  Game rules: paper wins over rock, rock wins over scissors, scissors wins over paper
  /  Returns:
  /     gameRules[x][y] == 0, for a tie; 
  /     gameRules[x][y] == 1, x wins over y; 
  /     gameRules[x][y] == -1, x loose over y
  */
  const rules = {
    gameValues: ["rock", "paper", "scissors"],
    gameRules: [
      [0, -1, 1],
      [1, 0, -1],
      [-1, 1, 0],
    ],
  };
  return rules;
}

// play a game of 5 rounds
function game() {
  let computerSelection = "",
    playerSelection = "",
    result = 0,
    scorePlayer = 0,
    scoreComputer = 0;

  let game = getGameRules();

  for (let i = 0; i < 5; i++) {
    //get computer selection
    computerSelection = game.gameValues[computerPlay()];

    //get user selection
    playerSelection = playerPlay();

    result = playRound(playerSelection, computerSelection, game);
    switch (result) {
      case 1:
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        scorePlayer++;
        break;
      case 0:
        console.log("It's a tie!");
        break;
      case -1:
        console.log(
          `You lose! ${playerSelection} lose agains ${computerSelection}`
        );
        scoreComputer++;
        break;
    }
  }
  if (scorePlayer > scoreComputer) {
    console.log("You win the round!");
  } else if (scorePlayer == scoreComputer) {
    console.log("It's a tie");
  } else {
    console.log("You lose the round!");
  }
}

//game();
const btn = document.querySelector("#button");
btn.addEventListener("click", (event) => game());
