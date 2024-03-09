//objects can be declared as literal and constructor(dynamically)
//singleton object : when we create an object using constructor..means when we declare an object as literal then it's is not a singleton object.it could've multiple instances

// Object.create will see later on
//object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Ashim", 
    "full name":"Ashim Prem Mahto", // do you have any way to access this ?? no that's why jsUser["full name"] .. one and only way to access it
    age: 19,
    email: "google@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["monday","saturday"],
    // what if we use symbol datatype over here?
     mySym :"mykey1",
    //actual way to use symbol
    // let's create a separate object to use symbol for better clarification
};
//cramp way to access
console.log(jsUser.name);
//one more way
console.log(jsUser["email"]); //why string ? because internally object variables are tracking as string that's why.
console.log("My full name is " ,jsUser["full name"]);//square notation is best
// console.log(jsUser.full name); // we can't

//can we access symbol?
console.log(jsUser.mySym); // it's okay u are using symbol but what what datatype let's see oops!!! it's string then how can we use symbol in our objects ??
console.log(typeof jsUser.mySym); // output : string
 
// to use symbol in objects
const mySym2 = Symbol("Key2")
const myObj ={
    // actual way to use symbol inside an object 
    [mySym2]:"myKey2" // symbol
}
console.log(myObj.mySym2); // trying to access via this way and we're getting something undefined.. so that way we can't access a symbol which is inside object
console.log(typeof myObj.mySym2);

console.log(myObj[mySym2]); // way to access a symbol which is declared inside an object
console.log(typeof myObj[mySym2]); // output : String aa rahi let's try to print whole object
console.log(myObj); // but here you can see output : {[Symbol(key2):'mykey2']}

// how to over-write or update or change values of a variable declared inside an object 
jsUser.email = "MainHunJiyan@gmail.com"
console.log(jsUser["email"]); // output :MainHunJiyan@gmail.com

//what if I want that no one can change the value of a variable which is declared inside an object ?

// Object.freeze(jsUser)


//let's try to make a change 
jsUser["email"] ="hellow@gmail.com" // yup there's no error but you can't make any change when you freeze the object
console.log(jsUser); // no changes applied after freezed

//now let's try to add a function inside an object: function in javascript treated as simple variable in object 
jsUser.greetings = function(){
    console.log("Hello JsUser");
}
jsUser.greetings2= function(){
    console.log(`Hello JsUser ,${this["full name"]}`); // this" keyword will cover later.
}
console.log(jsUser.greetings);// output : function [anonymous]
console.log(jsUser.greetings()); // output : error like greetings is not a function...  freeze kara tha

console.log(jsUser.greetings2);// output : function (anonymous)
console.log(jsUser.greetings2()); 