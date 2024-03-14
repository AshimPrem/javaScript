function one(){
    const username = "Ashim";
    function two() {
        const website ="youtube";
        console.log(username); // this function can access the variable of the outer function's variable
    }
    // console.log(website); // It'll give an error
    two();
}
one();

if(true){
    const username = "Ashim";
    if(username==="Ashim"){
        const website ="youtube";
        console.log(username , website); // both accessible
    }
    // console.log(website); // website isn't accessible 
}
    // console.log(username); // we can't access


    // +++++++++++++++++++++Interesting++++++++++++++
    // let's try to call before definition of the function
    console.log(addOne(5)); // do functions can be called before function definition
    function addOne(num) {
        return num +1;
    }
    console.log(addOne(4)) // we can even call a function after definition

 //function inside a variable wow ! in JS variables are very powerful

 // addTwo is just a variable right so can we use a variable before its declaration ? No let's try
   addTwo(5)  //output :Cannot access 'addTwo' before initialization
    const addTwo =function(num) {      // Mini-Hoisting 
        return num +2;
    }

    addTwo(4) // it's okay now