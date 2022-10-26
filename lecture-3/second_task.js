const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
let romanLettersArray=['M','D','C','L','X','V','I'];
let arabicNumbersArray=['1000','500','100','50','10','5','1'];
function getNumberDigits(numberLetters)//ищем каждой букве числа численный эквивалент
{ 
    let numberDigits=[];
    let errorFlag;//переменная, на случай, если введена неправильна буква
    numberLetters.forEach(letter => 
    { //переводим римское число в арабское, записываем числа в массив
        switch (letter)
        {
            case 'M':
                numberDigits.push(1000);
                break;
            case 'D':
                numberDigits.push(500);
                break;
            case 'C':
                numberDigits.push(100);
                break;
            case 'L':
                numberDigits.push(50);
                break;
            case 'X':
                numberDigits.push(10);
                break;
            case 'V':
                numberDigits.push(5);
                break;
            case 'I':
                numberDigits.push(1);
                break;
            default:
                errorFlag=1;//если не совпадают буквы
                console.log(`Invalid letter - ${letter} in ${numberLetters.join('')}`);
                break;
        }
    });
    if(errorFlag)
    {
        return console.log(`Invalid number - ${numberLetters.join('')}. Try again!`);
    }
    else {
        return numberDigits;//возвращаем массив чисел для римского числа
    }  
}
function calculateNumber(numberDigitsArray)//рассчитываем арабское число
{
    let numberX=0;
    if(numberDigitsArray.length==1)
    {
        numberX=numberDigitsArray[0];
    }
    else {
        for(let i=0;i<numberDigitsArray.length;i++)
        {
            if(numberDigitsArray[i]<numberDigitsArray[i+1])//если цифра меньше следующей
            {
                numberX-=numberDigitsArray[i];
            }
            //если цифра больше или они равны
            else if ((numberDigitsArray[i]>numberDigitsArray[i+1])||(numberDigitsArray[i]==numberDigitsArray[i+1]))
            {
                numberX+=numberDigitsArray[i];
            }
        }
        numberX+=numberDigitsArray[numberDigitsArray.length-1];//добавляем последнюю цифру
    }
    return numberX; //возвращаем число, записанное цифрами
}
function convertArabicToRoman(numberToConvert,resultArray,exception1,exception2,expression1,expression2)
{//переводим части числа в буквенный эквивалент
    first:
    while(numberToConvert!=0)
    {
        second:
        for(let i=0;i<arabicNumbersArray.length;i++)
        {
            if(numberToConvert==arabicNumbersArray[i])//если число совпадает с числом из массива
            {
                resultArray.push(romanLettersArray[i]); //добавляем соответствующую букву в результат
                break first;//заканчиваем цикл while
            }
            else if(numberToConvert==exception1)//если число равняется 400/40/4
            {
                resultArray.push(expression1);
                break first;
            }
            else if(numberToConvert==exception2)//если число равняется 900/90/9
            {
                resultArray.push(expression2);
                break first;
            }
            else if(numberToConvert-arabicNumbersArray[i]>=0)
            {
                resultArray.push(romanLettersArray[i]);
                numberToConvert-=arabicNumbersArray[i];//уменьшаем число
                break second;//заканчиваем цикл for
            }
        }
    }
    return resultArray;//массив римских букв
}
let toInputNumbers=function(){
    readline.question('Enter 2 numbers using Roman numerals and "+": ', inputNumbersString =>
    {
        let numbersArray=inputNumbersString.toUpperCase().split('+');//делаем полученные буквы заглавными и делим на два числа
        let numberAletters=numbersArray[0].split('');//делим буквы чисел на массив
        let numberBletters=numbersArray[1].split('');
        let numberAdigits=getNumberDigits(numberAletters);//переводим буквы в числа
        let numberBdigits=getNumberDigits(numberBletters);
        let numberA,numberB,numAplusB,resultLettersArray=[];
        if((numberAdigits==null)||(numberBdigits==null))
        {
            toInputNumbers();//если введенные неправльные буквы - начинать заново работу
        }
        else  
        {
            numberA=calculateNumber(numberAdigits);//рассчитываем число
            numberB=calculateNumber(numberBdigits);
            if((numberA>2000)||(numberB>2000))
            {
                console.log('Eror! Entered number is greater than 2000. Try again!')
                toInputNumbers();//если число больше 2000, то всЁ заново
            }
            else 
            {
                numAplusB=numberA+numberB;//результат в числовом виде
                console.log(`Entered first number - ${numberA}, second number - ${numberB}, sum - ${numAplusB}`);
                let numberThousand,numberHundred,numberDozen,numberUnit;
                numberThousand=Math.floor(numAplusB/1000)*1000;//делим число на тысячи
                numberHundred=Math.floor((numAplusB-numberThousand)/100)*100;//сотни
                numberDozen=Math.floor((numAplusB-numberThousand-numberHundred)/10)*10;//десятки
                numberUnit=numAplusB-numberThousand-numberHundred-numberDozen;//единицы
                while(numberThousand!=0)//переводим тысячи в буквенный вид
                {
                    if(numberThousand-1000>=0)
                    {
                        resultLettersArray.push(romanLettersArray[0]);   
                    }
                    numberThousand-=arabicNumbersArray[0];
                }
                convertArabicToRoman(numberHundred,resultLettersArray,400,900,'CD','CM');//переводим сотни
                convertArabicToRoman(numberDozen,resultLettersArray,40,90,'XL','XC');//десятки
                convertArabicToRoman(numberUnit,resultLettersArray,4,9,'IV','IX');//единцы
                console.log(`Result: ${numbersArray[0]} + ${numbersArray[1]} = ${resultLettersArray.join('')}`);//результат
                readline.close();
            }
        } 
    });
};
toInputNumbers();//вызов 