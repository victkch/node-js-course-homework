//encapsulation
class Quadrilateral {
  #firstSide;
  #secondSide;
  #thirdSide;
  #fourthSide;
  setFirstSide(firstSide) {
    this.#firstSide = firstSide;
  }
  setSecondSide(secondSide) {
    this.#secondSide = secondSide;
  }
  setThirdSide(thirdSide) {
    this.#thirdSide = thirdSide;
  }
  setFourthSide(fourthSide) {
    this.#fourthSide = fourthSide;
  }
  getFirstSide() {
    return this.#firstSide;
  }
  getSecondSide() {
    return this.#secondSide;
  }
  getThirdSide() {
    return this.#thirdSide;
  }
  getFourthSide() {
    return this.#fourthSide;
  }
  isQuadrilateralValid() {
    if (
      this.#firstSide < this.#secondSide + this.#thirdSide + this.#fourthSide &&
      this.#secondSide < this.#firstSide + this.#thirdSide + this.#fourthSide &&
      this.#thirdSide < this.#firstSide + this.#secondSide + this.#fourthSide &&
      this.#fourthSide < this.#firstSide + this.#secondSide + this.#thirdSide
    ) {
      return true;
    } 
    else {
      return false;
    }
  }
  printQuadrilateral() {
    if (this.isQuadrilateralValid()) {
      console.log(`Some quadrilateral: first side = ${this.#firstSide}, second side = ${this.#secondSide}, third side = ${this.#thirdSide}, fourth side = ${this.#fourthSide}`);
    } 
    else
      console.log("Cannot print the quadrilateral. This quadrilateral is not valid.");
  }
}
class Triangle {
  triangleName;
  firstSide;
  secondSide;
  thirdSide;
  constructor(triangleName, firstSide, secondSide, thirdSide) {
    this.triangleName = triangleName;
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }
  isTriangleValid() {
    if (
      this.firstSide < this.secondSide + this.thirdSide &&
      this.secondSide < this.firstSide + this.thirdSide &&
      this.thirdSide < this.firstSide + this.secondSide
    ) {
      return true;
    } 
    else {
      return false;
    }
  }
  printTriangle() {
    if (this.isTriangleValid()) {
      console.log(`${this.triangleName}: first side = ${this.firstSide}, second side = ${this.secondSide}, third side = ${this.thirdSide}`);
    } 
    else
      console.log(`Cannot print the ${this.triangleName}. This triangle is not valid.`);
  }
}
//inheritance
class RightTriangle extends Triangle {
  //polymorphism
  isTriangleValid() {
    if (Math.pow(this.secondSide, 2) + Math.pow(this.thirdSide, 2) === Math.pow(this.firstSide, 2)) {
      return true;
    } 
    else {
      return false;
    }
  }
  calculateSquare() {
    if (this.isTriangleValid()) {
      console.log(`Square of ${this.triangleName} - ${(this.secondSide * this.thirdSide) / 2}`);
    } 
    else
      console.log(`Cannot calculate the square of ${this.triangleName}. This triangle is not valid.`);
  }
}
class EquilateralTriangle extends Triangle {
  isTriangleValid() {
    if (this.firstSide === this.secondSide && this.firstSide === this.thirdSide && this.secondSide === this.thirdSide) {
      return true;
    } 
    else {
      return false;
    }
  }
  calculateHeight() {
    if (this.isTriangleValid()) {
      console.log(`Height of ${this.triangleName} - ${((this.firstSide * Math.sqrt(3)) / 2).toFixed(3)}`);
    } 
    else
      console.log(`Cannot calculate the height of ${this.triangleName}. This triangle is not valid.`);
  }
}
class IsosclesTriangle extends Triangle {
  isTriangleValid() {
    if (this.secondSide === this.thirdSide) {
      return true;
    } 
    else {
      return false;
    }
  }
  calculatePerimeter() {
    if (this.isTriangleValid()) {
      console.log(`Perimeter of ${this.triangleName} - ${this.firstSide + 2 * this.secondSide}`);
    } 
    else
      console.log(`Cannot calculate the perimeter of ${this.triangleName}. This triangle is not valid.`);
  }
}
class Square extends Quadrilateral {
  //polymorphism
  isQuadrilateralValid() {
    if (this.getFirstSide() === this.getSecondSide() && this.getFirstSide() === this.getThirdSide() &&
      this.getFirstSide() === this.getFourthSide() && this.getSecondSide() === this.getThirdSide() &&
      this.getSecondSide() === this.getFourthSide() && this.getFirstSide() === this.getFourthSide()) {
      return true;
    } 
    else {
      return false;
    }
  }
  calculatePerimeter() {
    if (this.isQuadrilateralValid()) {
      console.log(`Square's perimeter - ${4 * this.getFirstSide()}`);
    } 
    else
      console.log("Cannot calculate perimeter because this square is invalid.");
  }
}
class Rectangle extends Quadrilateral {
  isQuadrilateralValid() {
    if (this.getFirstSide() === this.getThirdSide() && this.getSecondSide() === this.getFourthSide()) {
      return true;
    } 
    else {
      return false;
    }
  }
  calculateDiagonal() {
    if (this.isQuadrilateralValid()) {
      console.log(`Rectangle's diagonal - ${Math.sqrt(Math.pow(this.getFirstSide(), 2) + Math.pow(this.getFourthSide(), 2))}`);
    } 
    else
      console.log("Cannot calculate diagonal because this rectangle is invalid.");
  }
}

let quadrilateral = new Quadrilateral(); //encapsulation
quadrilateral.setFirstSide(23);
quadrilateral.setSecondSide(4);
quadrilateral.setThirdSide(6);
quadrilateral.setFourthSide(1);
quadrilateral.printQuadrilateral(); //isn't valid

let triangle = new Triangle("Some thriangle", 5, 7, 8);
triangle.printTriangle(); //success

let rightTriangle = new RightTriangle("Right triangle №1", 5, 3, 4); //inheritance and polymorphism
rightTriangle.printTriangle(); //success
rightTriangle.calculateSquare();

let equilateralTriangle = new EquilateralTriangle("Equilateral triangle №1", 3, 3, 3);
equilateralTriangle.printTriangle();
equilateralTriangle.calculateHeight();

let isosclesTriangle = new IsosclesTriangle("Isoscles triangle №1", 5, 6, 6);
isosclesTriangle.printTriangle();
isosclesTriangle.calculatePerimeter();

let square = new Square();
square.setFirstSide(4);
square.setSecondSide(4);
square.setThirdSide(4);
square.setFourthSide(4);
square.printQuadrilateral(); //success
square.calculatePerimeter();

let rectangle = new Rectangle();
rectangle.setFirstSide(4);
rectangle.setSecondSide(3);
rectangle.setThirdSide(4);
rectangle.setFourthSide(3);
rectangle.printQuadrilateral();
rectangle.calculateDiagonal();
