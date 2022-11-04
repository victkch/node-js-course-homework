function isObjectEmpty(someObject){
    let someObjectJSON=JSON.stringify(someObject);
    if(someObjectJSON=='{}')
    {
        return true;
    }
    else return false;
}
function compareTwoObjects(object1,object2)
{
    let resultObject={};
    for(const key1 in object1)
    {
        for(const key2 in object2)
        {
            if (object1[key1]===object2[key2]){
                resultObject[`${key1}`]=object1[key1];
            }
        }
    }
    if(!isObjectEmpty(resultObject))
    {
        console.log('These properties are in both objects:');
        console.log(resultObject);
    }
    else console.log('There are no common properties in both objects.');
}
function findValueByItsKey(object,key)
{
    let flag=0;
    for(const objectKey in object)
    {
        if(objectKey===key)
        {
            flag=1;
            break;
        } 
    }
    if(flag===1)
    {
        console.log(`The value of key '${key}' is ${object[key]}.`);
    }
    else console.log(`The value of key '${key}' doesn't exist in object.`);  
}
let object1={
    name:"Object 1",
    country: "Ukraine",
    city:"Dnipro",
    date: "03-11-2022"
};
let object2={
    name:"Object 2",
    country:"Ukraine",
    city:"Kyiv",
    date: "03-11-2022"
};
let object3={};
console.log(isObjectEmpty(object3));//is empty
console.log(isObjectEmpty(object1));//isn't empty
compareTwoObjects(object1,object2);//common properties
compareTwoObjects(object1,object3);//no common properties
findValueByItsKey(object1,'city');//Dnipro
findValueByItsKey(object3,'city');//the key doesn't exist