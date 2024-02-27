//DataTypes

let name = "Ashim" //String
let name2 = 'prem' //String
let age = 20 //number
let isLoggedIn = false //boolean

//number -> range 2 to power 53  -> for big numbers bigint
//string
//boolean --> true/false --> 1 or 0

//null -> Actually it's a standlone value -->represent of empty--> will investigate later  
let state =null
//undefined --> when you don't initialize any value to a variable then by default it would be undefined 
let name3; //undefined

//symbol --> to find uniqueness --> to find an individual 

// so above all these datatypes are primitive datatypes

// object --> will cover later on


console.log(typeof undefined); // output -> undefined -> okay it's a special type of its own so no worries.but why null as object???
console.log(typeof null ); // typeof will tell u the datatype of any variable--> output - object -->why?? drawback of language or what? actually it's an object

//we can use typeof like this too -->
console.log(typeof(name3)); //output --> undefined