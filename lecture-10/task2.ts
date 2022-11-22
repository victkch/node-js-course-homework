const readline: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function splitToNumAndSymb(arr: Array<string>): Array<string> {
  let polynArguments: string = "";
  let resultArr: Array<string> = [];
  arr.forEach((element: string) => {
    if (Number.isInteger(Number(element))) {
      polynArguments += element;
    } else {
      if (polynArguments !== "") {
        resultArr.push(polynArguments);
      }
      polynArguments = "";
      resultArr.push(element);
    }
  });
  if (polynArguments !== "") {
    resultArr.push(polynArguments);
  }
  return resultArr;
}
function splitPolynToChars(stringPolyn: string): Array<string> {
  return stringPolyn.split("").filter((chars:string) => chars !== "(").filter((chars:string) => chars !== ")");
}
function splitPolynToArguments(arrStr: string): Array<string> {
  let polynArguments: Array<string> = splitPolynToChars(arrStr);
  let resultArr: Array<string> = [];
  let buff: string = "";
  for (let i = 0; i < polynArguments.length; i++) {
    if (polynArguments[i] === "+" || polynArguments[i] === "-") {
      if (buff !== "") {
        resultArr.push(buff);
        buff = "";
      }
      resultArr.push(polynArguments[i]);
      continue;
    } else {
      buff += polynArguments[i];
    }
  }
  resultArr.push(buff);
  return resultArr;
}
function isPolynValid(polyn: Array<string>): boolean {
  let flag: number = 0;
  for (let i = 0; i < polyn.length; i++) {
    if ((polyn[i] === "^" && Number(polyn[i + 1]) > 10) || (polyn[i] === "x" && Number(polyn[i - 1]) > Math.pow(10, 4))) {
      flag++;
    }
  }
  if (flag !== 0) {
    return false;
  } 
  else return true;
}
function multiplyPol(pol1: Array<string>,pol2:Array<string>):Array<string>{
  let coefficient: number, argument: string = "", coefPow: any;
  let resultArr: Array<string> = [];
  for (let i = 0; i < pol1.length; i++) {
    for (let j = 0; j < pol2.length; j++) {
      if (pol1[i] === "+" || pol1[i] === "-" || pol2[j] === "-" || pol2[j] === "+") {
        continue;
      } 
      else {
        if (pol1[i].includes("x") && pol2[j].includes("x")) {
          if (Number(pol1[i].substring(0, pol1[i].indexOf("x"))) &&
            Number(pol2[j].substring(0, pol2[j].indexOf("x")))) {
            coefficient = Number(pol1[i].substring(0, pol1[i].indexOf("x"))) *
              Number(pol2[j].substring(0, pol2[j].indexOf("x")));
          } 
          else if (Number(pol1[i].substring(0, pol1[i].indexOf("x"))) &&
            !Number(pol2[j].substring(0, pol2[j].indexOf("x")))) {
            coefficient = Number(pol1[i].substring(0, pol1[i].indexOf("x")));
          } 
          else if (!Number(pol1[i].substring(0, pol1[i].indexOf("x"))) &&
            Number(pol2[j].substring(0, pol2[j].indexOf("x")))) {
            coefficient = Number(pol2[j].substring(0, pol2[j].indexOf("x")));
          } 
          else coefficient = 1;
          if (pol1[i].includes("^") && pol2[j].includes("^")) {
            coefPow = Number(pol1[i].substring(pol1[i].indexOf("^") + 1)) +
              Number(pol2[j].substring(pol2[j].indexOf("^") + 1));
          } 
          else if (pol1[i].includes("^") && !pol2[j].includes("^")) {
            coefPow = Number(pol1[i].substring(pol1[i].indexOf("^") + 1)) + 1;
          } 
          else if (!pol1[i].includes("^") && pol2[j].includes("^")) {
            coefPow = Number(pol2[j].substring(pol2[j].indexOf("^") + 1)) + 1;
          } 
          else coefPow = 2;
          coefPow = `x^${coefPow}`;
        } 
        else if (pol1[i].includes("x") && !pol2[j].includes("x")) {
          if (Number(pol1[i].substring(0, pol1[i].indexOf("x")))) {
            coefficient = Number(pol1[i].substring(0, pol1[i].indexOf("x"))) *
              Number(pol2[j].substring(0, pol2.length));
          } 
          else coefficient = Number(pol2[j].substring(0, pol2.length));
          if (pol1[i].includes("^")) {
            coefPow = pol1[i].substring(pol1[i].indexOf("x"));
          } 
          else coefPow = "x";
        } 
        else if (!pol1[i].includes("x") && pol2[j].includes("x")) {
          if (Number(pol2[j].substring(0, pol2[j].indexOf("x")))) {
            coefficient = Number(pol1[i].substring(0, pol1.length)) *
              Number(pol2[j].substring(0, pol2[j].indexOf("x")));
          } 
          else coefficient = Number(pol1[i].substring(0, pol1.length));
          if (pol2[j].includes("^")) {
            coefPow = pol2[j].substring(pol2[j].indexOf("x"));
          } 
          else coefPow = "x";
        } 
        else {
          coefficient = Number(pol1[i].substring(0, pol1.length)) *
            Number(pol2[j].substring(0, pol2.length));
          coefPow = '';
        }
        if ((pol1[i - 1] === "-" && pol2[j - 1] === "-") ||
          (pol1[i - 1] === "+" && pol2[j - 1] === "+") ||
          (pol1[i - 1] === "+" && !pol2[j - 1]) ||
          (!pol1[i - 1] && pol2[j - 1] === "+")) {
            argument += '+';
        } 
        else if ((pol1[i - 1] === "-" && pol2[j - 1] === "+") ||
          (pol1[i - 1] === "+" && pol2[j - 1] === "-") ||
          (pol1[i - 1] === "-" && !pol2[j - 1]) ||
          (!pol1[i - 1] && pol2[j - 1] === "-")) {
            argument += '-';
        }
        if (coefficient !== 1 && coefPow !== '') {
          argument += coefficient.toString();
          argument += coefPow;
        }
        else if (coefficient >= 1 && coefPow === ''){
          argument += coefficient.toString();
        }
        else argument += coefPow;
        resultArr.push(argument);
        argument = "";
      }
    }
  }
  return resultArr;
}
function findMaxPow(polynPow: Array<string>): number {
  let arrofPow: Array<number> = [], maxPow: number;
  polynPow.forEach((elemPow) => arrofPow.push(Number(elemPow.substring(elemPow.indexOf("^") + 1))));
  maxPow = arrofPow[0];
  arrofPow.forEach((elem) => {
    if (elem > maxPow) {
      maxPow = elem;
    }
  });
  return maxPow;
}
function calculateSimilarElem(resultPolyn: Array<string>): string {
  let arrOfPow: Array<string> = [], arrOfX: Array<string> = [], arrOfNum: Array<string> = [];
  resultPolyn.forEach((element) => {
    if (element.includes("^")) {
      arrOfPow.push(element);
    } else if (element.includes("x") && !element.includes("^")) {
      arrOfX.push(element);
    } else arrOfNum.push(element);
  });
  let newArr: Array<string> = [], resultArrPow: Array<string> = [];
  let sum: number = 0, j: number = 0;
  for (let i = 0; i < arrOfPow.length; i++) {
    newArr.push(arrOfPow[i]);
    j = i + 1;
    while (j < arrOfPow.length) {
      if (arrOfPow[i].substring(arrOfPow[i].indexOf("^") + 1) === arrOfPow[j].substring(arrOfPow[j].indexOf("^") + 1)) {
        newArr.push(arrOfPow[j]);
        arrOfPow.splice(j, 1);
      } else j++;
    }
    if (newArr.length === 1) {
      resultArrPow.push(newArr[0]);
    } else {
      for (let k = 0; k < newArr.length; k++) {
        if (newArr[k][0] === "+") {
          if (Number(newArr[k].substring(1, newArr[k].indexOf("x")))) {
            sum += Number(newArr[k].substring(1, newArr[k].indexOf("x")));
          } else sum += 1;
        } else if (newArr[k][0] === "-") {
          if (Number(newArr[k].substring(1, newArr[k].indexOf("x")))) {
            sum -= Number(newArr[k].substring(1, newArr[k].indexOf("x")));
          } else sum -= 1;
        } else {
          if (Number(newArr[k].substring(0, newArr[k].indexOf("x")))) {
            sum += Number(newArr[k].substring(0, newArr[k].indexOf("x")));
          } else sum += 1;
        }
      }
      resultArrPow.push(`${sum}x^${newArr[0].substring(newArr[0].indexOf("^") + 1)}`);
    }
    newArr = [];
    sum = 0;
  }
  let resArr: Array<string> = [];
  let maxPow: number = findMaxPow(resultArrPow);
  while (maxPow > 1) {
    resultArrPow.forEach((elem) => {
      if (Number(elem.substring(elem.indexOf("^") + 1)) === maxPow) {
        resArr.push(elem);
      }
    });
    maxPow--;
  }
  for (let i = 0; i < arrOfX.length; i++) {
    if (arrOfX[i][0] === "+") {
      if (Number(arrOfX[i].substring(1, arrOfX[i].indexOf("x")))) {
        sum += Number(arrOfX[i].substring(1, arrOfX[i].indexOf("x")));
      } else sum += 1;
    } else if (arrOfX[i][0] === "-") {
      if (Number(arrOfX[i].substring(1, arrOfX[i].indexOf("x")))) {
        sum -= Number(arrOfX[i].substring(1, arrOfX[i].indexOf("x")));
      } else sum -= 1;
    } else {
      if (Number(arrOfX[i].substring(0, arrOfX[i].indexOf("x")))) {
        sum += Number(arrOfX[i].substring(0, arrOfX[i].indexOf("x")));
      } else sum += 1;
    }
  }
  if (sum > 1) {
    resArr.push(`+${sum}x`);
  } else if (sum === 1) {
    resArr.push("x");
  } else if (sum < 0) {
    resArr.push(`${sum}x`);
  }
  sum = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    if (arrOfNum[i][0] === "+") {
      sum += Number(arrOfNum[i].substring(1, arrOfNum[i].length));
    } else if (arrOfNum[i][0] === "-") {
      sum -= Number(arrOfNum[i].substring(1, arrOfNum[i].length));
    } else sum += Number(arrOfNum[i]);
  }
  if (sum > 0) {
    resArr.push(`+${sum}`);
  } else if (sum < 0) {
    resArr.push(`${sum}`);
  }
  return resArr.join("");
}
let multiplyTwoPolyn = function (): void {
  readline.question("Enter your math problem. For example: (6x^8-1)*(x+1) - ", (inputPolynString: string) => {
      let twoPolynomials: Array<string> = inputPolynString.split("*");
      let firstPolynChars: Array<string> = splitPolynToChars(twoPolynomials[0]);
      let secondPolynChars: Array<string> = splitPolynToChars(twoPolynomials[1]);
      let firstPolArg: Array<string> = splitToNumAndSymb(firstPolynChars);
      let secondPolArg: Array<string> = splitToNumAndSymb(secondPolynChars);
      if (isPolynValid(firstPolArg) && isPolynValid(secondPolArg)) {
        let firstPolynomial: Array<string> = splitPolynToArguments(twoPolynomials[0]);
        let secondPolynomial: Array<string> = splitPolynToArguments(twoPolynomials[1]);
        let resultPolyn: Array<string> = multiplyPol(firstPolynomial,secondPolynomial);
        console.log('Result - ' + calculateSimilarElem(resultPolyn));
      } 
      else console.log("Invalid polynomials.");
      readline.close();
    }
  );
};
multiplyTwoPolyn();
