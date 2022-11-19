const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let flag=0;
let displayTimetable = function () {
  readline.question("Enter a day - ", (inputDayString) => {
    import("./task2.js").then((obj) => {
      obj.timetable.forEach((data) => {
        if (data.day === inputDayString) {
          console.log(`${data.day}: ${data.subjects}`);
          flag=1;
        }
      });
    });
    if(flag===0){
        console.log('No data found.');
    }
    readline.close();
  });
};
displayTimetable();
