const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
let toInputNumber=function(){
  readline.question('Enter a number in the interval [10; 99] - ', inputNumberString =>
  {
    if ((Number(inputNumberString)<10) || (Number(inputNumberString)>99))
    {
      console.log('Wrong number! Try again.'); 
      toInputNumber();
    }
    else {
      console.log(`Entered digits: ${inputNumberString[0]} ${inputNumberString[1]}`);
      return readline.close();
    }    
  });
};
toInputNumber();
