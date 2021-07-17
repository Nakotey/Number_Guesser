let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, comGuess, secTrgtNo) {
  const userNum = Math.abs(userGuess - secTrgtNo);
  const comNum = Math.abs(comGuess - secTrgtNo);

  if(userGuess > 9 || userGuess < 0){
    alert('Please enter number between 0 and 9')
  }
  if(userNum === comNum) {
    return true;
  }else if(userNum <= 1){
    return true;
  }else if(comNum <= 1){
    return false;
  }
  return false;
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  }
  computerScore++;
}

const advanceRound = () => currentRoundNumber++;
