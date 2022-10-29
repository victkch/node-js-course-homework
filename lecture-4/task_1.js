const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function calcultePerimeterAndSquare(squareSide, multiplyBy = 4) {
  return console.log(`Perimeter - ${multiplyBy * squareSide}, square - ${squareSide * squareSide}`);
}
let toInputNumber = function () {readline.question("Enter a square's side in the interval [1; 1000] - ",inputNumberString => {
    if (Number(inputNumberString) < 1 || Number(inputNumberString) > 1000) {
        console.log("Wrong number! Try again.");
        toInputNumber();
    }
    else {
        calcultePerimeterAndSquare(Number(inputNumberString));
        return readline.close();
    }
});
};
toInputNumber();