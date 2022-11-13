const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
  if (flag === 1) {
    return [true, userIndex];
  } 
  else return [false, -1];
}
let buyProducts = function () {
  readline.question("Do you wanna make a purchase? [yes/no] - ", (enteredAnswer) => {
      switch (enteredAnswer) {
        case "yes":
          basket = [];
          console.log("Purchase made!");
          break;
        case "no":
          console.log("Okay. Bye!");
          break;
      }
      readline.close();
    }
  );
};
let addProductToBasketAndBuy = function (usersName, usersInd, nextFunction) {
  readline.question('Enter the product (To stop - enter "Stop") - ', (enteredProduct) => {
      if (enteredProduct === "Stop") {
        console.log(`Your basket - ${basket}.`);
        console.log("Total price - " + calcukateTotalPrice(basket));
        nextFunction();
      } 
      else {
        let flag = 0;
        products.forEach((product) => {
          if (enteredProduct === product.productName) {
            console.log("Product added!");
            flag = 1;
            basket.push(enteredProduct);
            users[usersInd].products.push({ productName: `${enteredProduct}` });
          }
        });
        if (flag === 0) {
          console.log("No such product in a products list.");
        }
        addProductToBasketAndBuy(usersName, usersInd, nextFunction);
      }
    }
  );
};
let startInterface = function (firstFunction, nextFunction) {
  readline.question("Enter user's name - ", (enteredName) => {
    let [result, index] = firstFunction(users, enteredName);
    if (result) {
      nextFunction(enteredName, index, buyProducts);
    } 
    else {
      console.log("User's name is not found");
      readline.close();
    };
  });
};
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
startInterface(displayUsersInfo, addProductToBasketAndBuy);
