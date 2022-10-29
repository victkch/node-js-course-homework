const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function multiply(num1, num2) {
  let multiplyReslt = num1 * num2;
  return multiplyReslt;
}
let toInputNumber = function () {readline.question("Enter two numbers - ", inputNumbersString => {
    let stringNumbersArray = inputNumbersString.split(" ");
    let numberNumbersArray = stringNumbersArray.map(function (stringNumber) 
    {
      return Number(stringNumber);
    });
    let multiplyResult = multiply(numberNumbersArray[0], numberNumbersArray[1]);
    let doubleResult = (resultFromMultiply,multiplyBy = 2) => 
    {
      return resultFromMultiply * multiplyBy;
    };
    let squareResult = (resultFromMultiply) => 
    {
      return resultFromMultiply * resultFromMultiply;
    };
    console.log(`Multiply number - ${multiplyResult}, double result - ${doubleResult(multiplyResult)}, square result - ${squareResult(multiplyResult)}`);
    return readline.close();
  });
};
toInputNumber();