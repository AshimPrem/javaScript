//Immeddiately invoked  function expressions
(function fun1() {
    //named IIFE
    console.log("Database connected");
})();  // IIFE must be terminated if the next line of code is an IIFE..

//sometimes global scope might create some problem and to remove that problem we use IIFE
//()() // first parenthesis for definition and second one for its immediate execution.

// similarly for arrow function
((name)=>{
    //Simple IIFE
    console.log(`Database connected ${name}`);
})("Ashim");
