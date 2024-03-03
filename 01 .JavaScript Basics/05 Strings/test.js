// "hello" +  "world"
 const name ="Ashim "
 const rollNo= 43
 //console.log(name+rollNo+"value"); //output : Ashim43value  // traditional approach to concate
 console.log(typeof name); //string
 //modern approach -> string interpolation.-> means we can directly inject the variable name which we want to concate
 console.log(`my name is ${name} and my roll no. is ${rollNo}`); // `` backticks :: this syntax is much better than the above

 //a more way to declare strings
 const gameName = new String("Ashim"); // creating object of strting 
  // run this line on your browser console , you'll see some indexes .. don't get confused ..Actually it's an object. so many methods are available
 console.log( typeof gameName); // object
 console.log(gameName[0]);  // to access key value pairs
 console.log(gameName.__proto__); // empty object  {}
 console.log(gameName.length);  //output :5 
 console.log(gameName.toLowerCase()); // output :ashim
 console.log(gameName.toUpperCase()); // output : ASHIM
 console.log(gameName.charAt(3)); // output : i ->  3rd position character
 console.log(gameName.indexOf("i")); // output :3 --> it will tell us the index or postion of i
 const newString = gameName.substring(0,4)
 console.log(newString); // output : Ashi
 const anotherString = gameName.slice(-8,4); // slice is little bit confusing
 console.log(anotherString);
 
 const newStringOne= "      hello       "
 console.log(newStringOne); // output :      hello
 console.log(newStringOne.trim()); //output :hello -> will remove all spaces
 console.log(newStringOne.trimStart()); // output :hello
 console.log(newStringOne.trimEnd()); // output :    hello 

 const url= "https://ashim.com/ashim%20prem" // problem is that browser doesn't understand spaces like sometimes what happens that user provide url something like https://ashim.com//ashim prem ...browser will convert that space int %20 automatically ..  
 console.log(url.replace('%20','-')); // output : https://ashim.com/ashim-prem 

 // to ask a keyword is present or not
 console.log(url.includes('raghav')); // output : fals

 // now suppose you've a string and you want to convert that string into an array for some reason then how?
 const str ="hey this is my string"
 console.log(str.split(' ')); //using seprator ' '
 