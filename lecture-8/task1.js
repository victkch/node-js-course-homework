const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function createRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
let guessNumber = function (finalScore) {
  let randomNumber = createRandomNumber();
  readline.question('Enter the number in the interval [1;6] (To stop - enter "STOP") - ',(inputNumberString) => {
      if (inputNumberString === "STOP") {
        console.log(`Score: ${finalScore}`);
        return readline.close();
      } 
      else if (Number(inputNumberString) === randomNumber) {
        finalScore += 2;
        guessNumber(finalScore);
      } 
      else if (Number(inputNumberString) - 1 === randomNumber || Number(inputNumberString) + 1 === randomNumber) {
        finalScore += 1;
        guessNumber(finalScore);
      } 
      else guessNumber(finalScore);
    }
  );
};
let finalScore = 0;
guessNumber(finalScore);
