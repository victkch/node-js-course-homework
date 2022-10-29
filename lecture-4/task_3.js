const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
function createBase(addBaseNumber) {
  return function (addNumber) {
    return addNumber+addBaseNumber;
  };
}
let toInputNumber = function () {readline.question("Enter a number - ", inputNumberString => {
    let addSix = createBase(6);
    let addResult=addSix(Number(inputNumberString))
    console.log(`Result: ${inputNumberString} + 6 = ${addResult}`);
    return readline.close();
  });
};
toInputNumber();