let scores = {
  win: 0,
  lose: 0,
  tie: 0,
};

const guessGame = (myPick) => {
  const randomNumb = Math.random();
  let result;
  if (randomNumb > 0 && randomNumb <= 1 / 3) {
    result = "Rock";
  } else if (randomNumb > 1 / 3 && randomNumb <= 2 / 3) {
    result = "Paper";
  } else if (randomNumb > 2 / 3 && randomNumb <= 3 / 3) {
    result = "Scissors";
  }

  let computerMove = result;
  let myOutcome;
  let compOutcome;

  if (myPick === "Rock") {
    if (myPick === computerMove) {
      myOutcome = "Tie";
      compOutcome = "Tie";
    } else if (computerMove === "Paper") {
      myOutcome = "Win";
      compOutcome = "Lose";
    } else if (computerMove === "Scissors") {
      myOutcome = "Lose";
      compOutcome = "Win";
    }
  } else if (myPick === "Paper") {
    if (myPick === computerMove) {
      myOutcome = "Tie";
      compOutcome = "Tie";
    } else if (computerMove === "Rock") {
      myOutcome = "Win";
      compOutcome = "Lose";
    } else if (computerMove === "Scissors") {
      myOutcome = "Lose";
      compOutcome = "Win";
    }
  } else if (myPick === "Scissors") {
    if (myPick === computerMove) {
      myOutcome = "Tie";
      compOutcome = "Tie";
    } else if (computerMove === "Paper") {
      myOutcome = "Win";
      compOutcome = "Lose";
    } else if (computerMove === "Rock") {
      myOutcome = "Lose";
      compOutcome = "Win";
    }
  }

  if (myOutcome === "Win") {
    scores.win++;
  } else if (myOutcome === "Lose") {
    scores.lose++;
  } else if (myOutcome === "Tie") {
    scores.tie++;
  }

  alert(
    `You picked ${myPick}, computer picked ${computerMove}. You: ${myOutcome}, computer: ${compOutcome}.
    
    You won: ${scores.win} games, Lost: ${scores.lose} games and Tied: ${scores.tie} games.`
  );
};
