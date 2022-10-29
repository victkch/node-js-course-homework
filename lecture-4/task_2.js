const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function multiply(num1, num2) {
  let multiplyReslt = num1 * num2;
  return multiplyReslt;
}
function double(numberToDouble){
  return multiply(numberToDouble,2);
}
function square(numberToSquare){
  return multiply(numberToSquare,numberToSquare);
}
let toInputNumber = function () {readline.question("Enter a number - ", inputNumberString => {
    console.log(`Multiply by 2 - ${double(Number(inputNumberString))}, square - ${square(Number(inputNumberString))}`);
    return readline.close();
  });
};
toInputNumber();