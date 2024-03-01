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



    //-------------->Operation<----------------

    let value=4;
    let negValue=-value; 
    console.log(negValue); // output : -4
    //basic arithmatic operations --> I'll not discuss this one
    let str1 = "hello";
    let str2 = "Ashim";
    let str3 = str1+ str2;
    console.log(str3); //output : hello Ashim 

    // so in the above code there's no problem

    // let's try these operations
    console.log(1+"2"); //output : 12
    console.log("1"+2); //output : 12
     // how? one string and other one is number 

     //let's try another one
     console.log("1"+2+2);//output :122
      // but I though output would be 14 but it's 122 how?? what's the problem ? why all are treating as string ??
      
      //let's do something else...
      console.log(2+2+"1"); //output : 41
      // how ?? so 
      //so there're some rules when we convert one datatype into another datatype  
      // read ECMA standard 

      console.log(3+3+56+7*7); // these type of statement are good for exam pov. not for real life use-->use parenthesis

      // tricky conversion

      console.log(true); //true
      console.log(+true);//output :1 ..increament
      // console.log(true+); // error
      console.log(+""); //output :1


      let num1,num2,num3;
      num1=num2=num3=2+2; //why 2+2 ?? write readable code 


      let gameCounter=100;
      gameCounter++; //postfix 
      console.log(gameCounter); // output : 101

      ++gameCounter; //prefix 