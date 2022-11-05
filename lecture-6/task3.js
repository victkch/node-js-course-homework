let callbackFunction = (previousValue, currentValue) => {
  return previousValue + currentValue;
};
let reduce = (arr, reduceCallback, initialValue) => {
  let accumulator = initialValue;
  arr.forEach((element) => {
    accumulator = reduceCallback(accumulator, element);
  });
  return accumulator;
};
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of array's elements:");
console.log(reduce(numbersArray, callbackFunction, 0));