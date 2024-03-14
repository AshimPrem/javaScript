// var c=200;  global scope

let a= 20; //totally independent to "a" which is declared inside if()
//local scope --> accessible within the braces only
if(true){
let a =10;
const b=20;
var c =30; // only this will be accessible outside the braces;
} 
// console.log(a); // a not accessible
// console.log(b);//b not accessible because they are local variable to if() scope
console.log(c); //accessible

//scope will be  different in local node environment and console of browser
