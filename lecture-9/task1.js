const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let solveProblem = function () {
  readline.question("Enter your math problem (For example: 2*2+2) - ", (inputProblemString) => {
      let problemNumbersArr = [],
        numbers = inputProblemString[0],
        result;
      for (let i = 0; i < inputProblemString.length; i++) {
        if (Number.isInteger(Number(inputProblemString[i + 1]))) {
          numbers += inputProblemString[i + 1];
        } 
        else {
          problemNumbersArr.push(numbers);
          problemNumbersArr.push(inputProblemString[i + 1]);
          numbers = "";
        }
      }
      result = Number(problemNumbersArr[0]);
      for (let i = 1; i < problemNumbersArr.length - 1; i++) {
        if (problemNumbersArr[i] === "/") {
          result /= Number(problemNumbersArr[i + 1]);
        } 
        else if (problemNumbersArr[i] === "*") {
          result *= Number(problemNumbersArr[i + 1]);
        } 
        else if (problemNumbersArr[i] === "+") {
          result += Number(problemNumbersArr[i + 1]);
        } 
        else if (problemNumbersArr[i] === "-") {
          result -= Number(problemNumbersArr[i + 1]);
        }
      }
      console.log("Result: " + result.toFixed(3));
      readline.close();
    }
  );
};
module.exports = { readline, solveProblem };
