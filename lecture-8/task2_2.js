const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let products = [
  { productName: "Pencil", price: 15 },
  { productName: "Pen", price: 25 },
  { productName: "Notebook", price: 56 },
  { productName: "Eraser", price: 12 },
  { productName: "Ruler", price: 19 },
];
let users = [
  {
    buyerName: "Victor",
    products: [{ productName: "Pencil" }, { productName: "Pen" }],
  },
  {
    buyerName: "Alina",
    products: [{ productName: "Pencil" }, { productName: "Ruler" }],
  },
];
let basket = [];
function calcukateTotalPrice(basket) {
  let totalPrice = 0;
  products.forEach((product) => {
    basket.forEach((item) => {
      if (product.productName === item) {
        totalPrice += product.price;
      }
    });
  });
  return totalPrice;
}
function displayUsersInfo(usersArray, userName) {
  let flag = 0, userIndex;
  usersArray.forEach((user) => {
    if (user.buyerName === userName) {
      flag = 1;
      userIndex = users.indexOf(user);
      console.log("User's info:");
      console.log(user);
    }
  });
  return new Promise((resolve, reject) => {
    if (flag === 1) {
      resolve(userIndex);
    } 
    else reject(new Error("User's name is not found"));
  });
}
function addProductsToBasket(productName) {
  return new Promise((resolve, reject) => {
    products.forEach((product) => {
      if (productName === product.productName) {
        resolve("Product added!");
        basket.push(productName);
        users[usersInd].products.push({ productName: `${productName}` });
      }
    });
    reject(new Error("No such product in a products list."));
  });
}
let buyProducts = function () {
  return new Promise((resolve, reject) => {
    readline.question("Do you wanna make a purchase? [yes/no] - ", (enteredAnswer) => {
        if (enteredAnswer === "yes") {
          resolve("Purchase made!");
        } 
        else reject(new Error("Purchase was not made. Bye!"));
      });
  });
};
let addProductToBasketAndBuy = function (usersName, usersInd, nextFunction) {
  readline.question('Enter the product (To stop - enter "Stop") - ', (enteredProduct) => {
      if (enteredProduct === "Stop") {
        console.log(`Your basket - ${basket}.`);
        console.log("Total price - " + calcukateTotalPrice(basket));
        nextFunction().then(
          (result) => { console.log(result); readline.close(); },
          (error) => { console.log(error); readline.close(); }
        );
      } 
      else 
        addProductsToBasket(enteredProduct).then(
          (result) => { console.log(result); addProductToBasketAndBuy(usersName, usersInd, nextFunction); },
          (error) => { console.log(error); addProductToBasketAndBuy(usersName, usersInd, nextFunction); });
    });
};
let startInterface = function (firstFunction, nextFunction) {
    readline.question("Enter user's name - ", (enteredName) => {
    firstFunction(users, enteredName).then(
      (result) => nextFunction(enteredName, result, buyProducts),
      (error) => { console.log(error); readline.close(); });
  });
};
startInterface(displayUsersInfo, addProductToBasketAndBuy);
