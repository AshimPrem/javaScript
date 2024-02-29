    let score =33
    //  first we need to check whether it's a string or number because sometimes happens that,,, we might be working in the backend , we don't know the data that came --> is string or a number..it may be object --> no guarantee , data may be in any format
    
    console.log(typeof score); //outpput -> number
    score="33"
    console.log(typeof (score)); 

    let valueInNumber =Number(score) //string will get converted into a number 

    console.log(typeof valueInNumber); // output -> number 

    //okay one more thing

    score = "44abcd453";
    valueInNumber = Number(score);
    console.log(typeof valueInNumber); // again output : number ..how? is it possible to convert 44abcd453 in numbers ??? no ! extremely not ... so that's the problem 
    //let's try to print what's inside valueInNumber

    console.log(valueInNumber); //output : NaN that means not a number  ...NaN is also a type

    //that's why whenever you check any value ..please be careful ..check carefully .. 

    // ahhh! so many bugs in javaScript that's why some people prefer typeScript over JavaScript

    //try to investigate things 

    //now suppose what if the value inside score is null then what'll happen ?? let's see
    score = null;
    valueInNumber=Number(score);
    console.log(typeof valueInNumber); //output : number
    console.log(valueInNumber); // output : 0

    // what if value is undefined? let's see

    score=undefined;
    valueInNumber=Number(score);
    console.log(typeof valueInNumber); //output : number
    console.log(valueInNumber); //output : NaN

    // what if value is boolean?

    score =true;
    valueInNumber=Number(score);
    console.log(typeof valueInNumber); //output :number
    console.log(valueInNumber); //output : 1

    //conclusion
    /* "33" --> 33
       "33abc"--> NaN but type number
       true ->1
       false ->0
       */

    //some more investigation
    let isLoggedIn=1;
    let booleanIsLoggedIn =Boolean(isLoggedIn);
    console.log(typeof booleanIsLoggedIn); //output : boolean
    console.log(booleanIsLoggedIn); //output : true

    //again let's try to convert an empty string

    isLoggedIn="";
    booleanIsLoggedIn=Boolean(isLoggedIn);
    console.log(typeof booleanIsLoggedIn); //output :boolean
    console.log(booleanIsLoggedIn); //output : false

    // now let's try to put some name
    isLoggedIn= "ashim";
    booleanIsLoggedIn=Boolean(isLoggedIn);
    console.log(typeof booleanIsLoggedIn); //output : boolean
    console.log(booleanIsLoggedIn); //output : true

    // 1==> true 
    // ""==> false
    // "Ashim"==> true

    //let's try to convert some numbers into string

    let someNumber=33
    let stringNumber=String(someNumber);
    console.log(stringNumber); // output : 33 it's okay but 
    console.log(typeof stringNumber); //output : string