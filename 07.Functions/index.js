//functions with objects and array in javascript
function calculatePrice(...num1) { // spread operator  when we don't know number of argument is coming
    return num1;
}
console.log(calculatePrice(200,300,400)); // output : [ 200, 300, 400 ] //passing multiple values

function calculatePrice2(val1,val2,...num1) {// val1=30 ,val2 =40; rest values will be stored into num1
    return num1;
}
console.log(calculatePrice2(30,40,50,60,50,30,40));

// object
const user ={
    username:"Ashim",
    price : 300
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) // passing object
// passing direct object
handleObject({
    username:"Prem",
    price :99
})

//passing arrays
const myNewArray =[20,30,40,50,60,70,80];

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

//as object we can pass arrays directly