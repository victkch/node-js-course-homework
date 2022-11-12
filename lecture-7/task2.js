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
  printQuadrilateral() {
    if (this.isQuadrilateralValid()) {
      console.log(`Some quadrilateral: first side = ${this.#firstSide}, second side = ${this.#secondSide}, third side = ${this.#thirdSide}, fourth side = ${this.#fourthSide}`);
    } else
      console.log('Cannot print the quadrilateral. This quadrilateral is not valid.');
  }
  calculateTwoQuadrilateralIntersection(obj1, obj2) {
    if (obj1.isQuadrilateralValid() && obj2.isQuadrilateralValid()) {
      if (obj1.getFirstSide() >= obj2.getFirstSide() && obj1.getSecondSide() >= obj2.getSecondSide()) {
        console.log(`Intersection square - ${obj2.getFirstSide() * obj2.getSecondSide()}`);
      } 
      else
        console.log('Cannot calculate square because the second quadrilateral than the first one.');
    } 
    else {
        console.log('The quadrilaterals are invalid.');
    }
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
  printTriangle() {
    if (this.isTriangleValid()) {
      console.log(`${this.triangleName}: first side = ${this.firstSide}, second side = ${this.secondSide}, third side = ${this.thirdSide}`);
    } 
    else
      console.log(`Cannot print the ${this.triangleName}. This triangle is not valid.`);
  }
  calculateTwoTrianglesIntersection(obj1, obj2) {
    if (obj1.isTriangleValid() && obj2.isTriangleValid()) {
      if (obj1.firstSide >= obj2.firstSide && obj1.secondSide >= obj2.secondSide && obj1.thirdSide >= obj2.thirdSide) {
        let perimeter = obj2.firstSide + obj2.secondSide + obj2.secondSide;
        let square = Math.sqrt(perimeter * (perimeter - obj2.firstSide) * (perimeter - obj2.secondSide) * (perimeter - obj2.thirdSide));
        console.log(`Intersection square - ${square.toFixed(3)}`);
      } 
      else
        console.log('Cannot calculate square because the second triangle than the first one.');
    } 
    else {
      console.log('The triangles are invalid.');
    }
  }
}
class RightTriangle extends Triangle {
  isTriangleValid() {
    if (Math.pow(this.secondSide, 2) + Math.pow(this.thirdSide, 2) === Math.pow(this.firstSide, 2)) {
      return true;
    } 
    else {
      return false;
    }
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
}
class Square extends Quadrilateral {
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
}
class Rectangle extends Quadrilateral {
  isQuadrilateralValid() {
    if (this.getFirstSide() === this.getThirdSide() && this.getSecondSide() === this.getFourthSide()
    ) {
      return true;
    } 
    else {
      return false;
    }
  }
}
let rectangle1 = new Rectangle();
rectangle1.setFirstSide(5);
rectangle1.setSecondSide(10);
rectangle1.setThirdSide(5);
rectangle1.setFourthSide(10);
rectangle1.printQuadrilateral();
let rectangle2 = new Rectangle();
rectangle2.setFirstSide(2);
rectangle2.setSecondSide(5);
rectangle2.setThirdSide(2);
rectangle2.setFourthSide(5);
rectangle2.printQuadrilateral();
let result1 = new Rectangle();
result1.calculateTwoQuadrilateralIntersection(rectangle1, rectangle2);

let square1 = new Square();
square1.setFirstSide(5);
square1.setSecondSide(5);
square1.setThirdSide(5);
square1.setFourthSide(5);
square1.printQuadrilateral();
let square2 = new Square();
square2.setFirstSide(3);
square2.setSecondSide(3);
square2.setThirdSide(3);
square2.setFourthSide(3);
square2.printQuadrilateral();
let result2 = new Square();
result2.calculateTwoQuadrilateralIntersection(square1, square2);

let isosclesTriangle1 = new IsosclesTriangle('Isoscles triangle 1', 6, 5, 5);
isosclesTriangle1.printTriangle();
let isosclesTriangle12 = new IsosclesTriangle('Isoscles triangle 2', 4, 2, 2);
let result3 = new IsosclesTriangle();
isosclesTriangle12.printTriangle();
result3.calculateTwoTrianglesIntersection(isosclesTriangle1, isosclesTriangle12);

let equilateralTriangle1 = new EquilateralTriangle('Equilateral triangle 1', 13, 13, 13);
equilateralTriangle1.printTriangle();
let equilateralTriangle2 = new EquilateralTriangle('Equilateral triangle 2', 7, 7, 7);
equilateralTriangle2.printTriangle();
let result4 = new EquilateralTriangle();
result4.calculateTwoTrianglesIntersection(equilateralTriangle1, equilateralTriangle2);

let rightTriangle1 = new RightTriangle("Right triangle 1", 13, 5, 12);
rightTriangle1.printTriangle();
let rightTriangle2 = new RightTriangle("Right triangle 2", 5, 3, 4);
rightTriangle2.printTriangle();
let result5 = new RightTriangle();
result5.calculateTwoTrianglesIntersection(rightTriangle1, rightTriangle2);
