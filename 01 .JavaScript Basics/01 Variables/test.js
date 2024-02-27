const accountId=1345542 // const variables cannot be uninitialized and it cannot be changed within the code .
let accountEmail ="Ashim@google.com"  
var accountPassword ='ashim'    //ah ! String should be inside either single quotation or double quotation marks  
/*prefer let instead of var because block scope problem or function scope problem*/
// let and var both can be changed 
accountCity ='Jharkhand' // haha there's nothing let's see about it  --> we can declare variables like that but never do such stupid things
let accountState ; // by default variable will be assigned as undefined     
//let's do some investigation 

//accountId=12443; // here you can see we're able to change but we've something that will not let it execute and give us an error -> that is our node js -> node js will analyze our whole code  //comment this
// console.log(accountId)
accountEmail ="prem@google.com"  
accountPassword="prem" 
accountCity= "Ranchi" // let and var can be changed

// console.log(accountId,ccountEmail , accountPassword) // it will print one by one

// another method to print 
console.table([accountId,accountEmail,accountPassword ,accountCity]) //will print everything in a table


// why we use let instead of using var ? 
//because block scope problem , It doesn't follow block scope thing .. means it can be changed anywhere ..consider a situation you want a variable whose value will change only in a particular block ..but you declared that variable as "var " then that variable can be changed outside of that block.. that's why we prefer let instead of var.

// so above statements conclusion
//--> variables can be declared like
// 1. let
// 2. var
// 3. no let or var only name of variable
