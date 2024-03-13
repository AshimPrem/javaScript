//some lines of code that  can perform some specific task .. enhance code readability

// print your name 5 times obviously we can do it via loop but we'll try via using functions
console.log("A");
console.log("S");
console.log("H");
console.log("I");
console.log("M");  

// create a function 
function printMyName() {  // function definition
 console.log("A");
console.log("S");
console.log("H");
console.log("I");
console.log("M");  
}
printMyName() ;// function call

// printMyName  reference only

// function to add two numbers
function addTwoNumbers(num1, num2) {  // num1, num2 --> parameters
  console.log( num1+num2);
}
addTwoNumbers(2,3); // okay what if 
addTwoNumbers(2,"4"); // output : 24 .. no conversion
addTwoNumbers(4,null);
addTwoNumbers(4,"a");  //2,3 --> arguments

const result = addTwoNumbers(2,9);
// what's the value inside result ? undefined
console.log("result : ",result);  // output : undefined ... how?? we didn't return 

// new function 
function addThreeNumbers(num1, num2,num3) {  // num1, num2 --> parameters
    // let result = num1+num2+num3;
    // return result; // return terminates the function execution
    return num1+num2+num3;
  }
const myResult = addThreeNumbers(2,3,6);
console.log("myResult : ",myResult);

function loginUserMessage(username) {
    // if(username===undefined){
    //     console.log("please enter a username:");
    //     return;
    // }
    if(!username){
        console.log("please enter a username:");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ashim"));
console.log(loginUserMessage("")); // output : just logged in
// what if there's no argument
console.log(loginUserMessage()); //output : undefined just logged in.. we can check using conditions
