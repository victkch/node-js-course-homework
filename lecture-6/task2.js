let numberArray = [1, 2, 2, 3, 3, 3];
let newNumbersArray = [];
numberArray.filter((eachNumber) => {
  if (!newNumbersArray.includes(eachNumber)) {
    newNumbersArray.push(eachNumber);
  }
});
console.log("Unique numbers:");
console.log(newNumbersArray);