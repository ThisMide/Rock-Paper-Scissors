// let scores = {
//   win: 0,
//   lose: 0,
//   tie: 0,
// };

// This is the second part of using the localStorage in Js, once data is stored in it like i did in line 69, using localStorage.setItem(), the data must be accessed somewhere else like below using localStorage.getItem()(this helps recall the stored data/value). Now because storage is done only in strings using JASON.stringify(), i have to convert it back to usable data, to the original state it was before stringifying it by using JASON.parse(). So now, instead of my 'scores' to always start from '0' as in line 1 (now commented out), it will always start from line 8 which is referring to the last value stored in the localStorage in line 69
let scores = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};
// The 'OR' operator (||) used above and object value after the recall of stored value code using localStorage.getItem() is for initializing the scores. If the object is not there, the scores will not initialize, because it will only be referring to the last score, of which nothing has been stored earlier. So, to understand the line 8 code, it will first load JSON.parse(localStorage.getItem("score")) first, and if nothing has been stored to recall, it will run the '||' object {win: 0, lose: 0,tie: 0,}

const guessGame = (myPick) => {
  const randomNumb = Math.random();
  let result;
  if (randomNumb >= 0 && randomNumb < 1 / 3) {
    result = "Rock";
  } else if (randomNumb >= 1 / 3 && randomNumb < 2 / 3) {
    result = "Paper";
  } else if (randomNumb >= 2 / 3 && randomNumb < 1) {
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
  // This localStorage.setItem() below is to save certain details to local storage. in this case, it is to save the score of the games, so that when the page is reloaded, it is not restarting the count of scores, it will simply continue from where it stopped before refreshing. it takes 2 arguments, which are only strings. The first is the name of whatever you want to store, the second is the actual value/data you want to store (it could be variable, function, objects, numbers), but in this case, it is the 'score' object in line 1. Because localStorage can only take strings as arguments, we have to convert the 'scores' object into string by using JSON.stringify().

  localStorage.setItem("score", JSON.stringify(scores));

  alert(
    `You picked ${myPick}, computer picked ${computerMove}. You: ${myOutcome}, computer: ${compOutcome}.
    
    You won: ${scores.win} games, Lost: ${scores.lose} games and Tied: ${scores.tie} games.`
  );
};
