function createRandomMatrix(numberOfRows, numberOfColumns) {
  let matrix = new Array(numberOfRows);
  for (let i = 0; i < numberOfRows; i++) {
    matrix[i] = new Array(numberOfColumns);
    for (let j = 0; j < numberOfColumns; j++) {
      matrix[i][j] = Math.floor(Math.random() * 11) - 5;
    }
  }
  return matrix;
}
function multiplyMatrixs(matrix1, matrix2) {
  if (matrix1[0].length === matrix2.length) {
    let matrixC = new Array(matrix1.length);
    for (let i = 0; i < matrix1.length; i++) {
      matrixC[i] = new Array(matrix2[0].length);
      for (let j = 0; j < matrix2[0].length; j++) {
        let multiplySum = 0;
        for (let helpIndex = 0; helpIndex < matrix1[0].length; helpIndex++) {
          multiplySum += matrix1[i][helpIndex] * matrix2[helpIndex][j];
        }
        matrixC[i][j] = multiplySum;
      }
    }
    return matrixC;
  } 
  else {
    let stringResult = "Number of columns of matrix A doesn't equal number of rows of matrix B.";
    return stringResult;
  }
}
let matrixA_1 = createRandomMatrix(4, 2);
let matrixB_1 = createRandomMatrix(5, 3);
console.log(multiplyMatrixs(matrixA_1, matrixB_1)); //fail
let matrixA_2 = createRandomMatrix(4, 2);
let matrixB_2 = createRandomMatrix(2, 5);
console.log("Matrix A:");
console.log(matrixA_2);
console.log("Matrix B:");
console.log(matrixB_2);
console.log("Matrix C:");
console.log(multiplyMatrixs(matrixA_2, matrixB_2)); //success