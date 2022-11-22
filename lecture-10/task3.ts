const readlineNew: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function arePointValid(pointsArr: Array<number>): boolean {
  let flag: number = 0;
  pointsArr.forEach((elem) => {
    if (Math.abs(elem) > 100) {
      flag++;
    }
  });
  if (flag !== 0) {
    return false;
  } else return true;
}
function getTwoPoints(pointString: string): Array<number> {
  let resArr: Array<number> = [];
  resArr.push(Number(pointString.substring(pointString.indexOf("(") + 1, pointString.indexOf(","))));
  resArr.push(Number(pointString.substring(pointString.indexOf(",") + 1, pointString.indexOf(")"))));
  return resArr;
}
function isPointOnTriangle(pointA: Array<number>, pointB: Array<number>, pointC: Array<number>, pointO: Array<number>): number {
  let distAbAo: number = (pointA[0] - pointO[0]) * (pointB[1] - pointA[1]) - (pointB[0] - pointA[0]) * (pointA[1] - pointO[1]),
    distBcBo: number = (pointB[0] - pointO[0]) * (pointC[1] - pointB[1]) - (pointC[0] - pointB[0]) * (pointB[1] - pointO[1]),
    distAcAo: number = (pointC[0] - pointO[0]) * (pointA[1] - pointC[1]) - (pointA[0] - pointC[0]) * (pointC[1] - pointO[1]);
  if ((distAbAo >= 0 && distBcBo >= 0 && distAcAo >= 0) || (distAbAo < 0 && distBcBo < 0 && distAcAo < 0)) {
    return 1;
  } else return 0;
}
let pointOnTriangle = function (): void {
  readlineNew.question("Enter coordinates for A-point - ", (inputA: string) => {
    readlineNew.question("Enter coordinates for B-point - ", (inputB: string) => {
        readlineNew.question("Enter coordinates for C-point - ", (inputC: string) => {
            readlineNew.question("Enter coordinates for O-point - ", (inputO: string) => {
                let numPointsA: Array<number> = getTwoPoints(inputA);
                let numPointsB: Array<number> = getTwoPoints(inputB);
                let numPointsC: Array<number> = getTwoPoints(inputC);
                let numPointsO: Array<number> = getTwoPoints(inputO);
                if (arePointValid(numPointsA) && arePointValid(numPointsB) && arePointValid(numPointsC) && arePointValid(numPointsO)) {
                  console.log(isPointOnTriangle(numPointsA, numPointsB, numPointsC, numPointsO));
                } else console.log("Numbers are greater than 100.");
                readlineNew.close();
              }
            );
          }
        );
      }
    );
  });
};
pointOnTriangle();
