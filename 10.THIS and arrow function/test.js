const user={
    username :"Ashim",
    price : 999,
    welcomeMessage: function () {
    console.log(`${this.username},welcome to website`); //this refers to current context
    // console.log(this);
            }
}
// user.welcomeMessage();
// user.username= "Prem" // value changed
// user.welcomeMessage();

// console.log(this); // { } -> empty object

// +++Arrow function++++
function code(){
    let username ="Ashim"
    console.log(this.username); // can we do something like this inside a function ?? the answer is no!!! undefined

}
code(); // so many things are coming...what're these?? there's a lot of things inside this and we can access all these things but how??


// let's see how can we use the things which are present inside "this"

const fun = function() {
    let username = "Ashim";
  //  console.log(this.username); // same thing as happened earlier ..undefined
}
fun()
// how to create an arrow function ?
const fun2 =()=>{
    let username ="Ashim";
    console.log(this.username); //so with arrow function same thing happened as earliar .
    console.log(this); // {} empty object
}
fun2();

//something more about arrow function
const addTwo = (num1, num2)=>{
    return num1+num2; // explicit return
}
console.log(addTwo(2,4));

//implicit return; -> just remove curly braces
const addThree =(num1,num2,num3)=>num1+num2+num3;//most important for react
console.log(addThree(2,4,5));

//what if we want to return an object implicitly?
const fun3=() =>{username:"Ashim"}
console.log(fun3()); //undefined why?? cause we can't return object implicitly like the above we did .. so how can we return object then? use parenthesis 
const fun4=() =>({username:"Ashim"}) // that's how objects are return implicitly
console.log(fun4());

// const myArr =[2,3,5];
// myArr.forEach(()=>())