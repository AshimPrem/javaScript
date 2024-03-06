const score = 400;  // in browser - 400
                   // js automatically identified this is a number but we can define explicitly as number
console.log(score); //output : 400 
const balance = new Number (190); // now it's guaranteed , this is a number 
console.log( balance); //output : [Number : 190 ] that's the difference .. try to print this one in browser console  you'll get so many functions

console.log(balance.toString()); // to string will convert that number into string and now it's a string so we'll have some additional methods through which we can manipulate this string.
//for example
console.log(balance.toString().charAt(2)); // output : 0 
console.log(balance.toString().length);

//now 
console.log(balance.toFixed(2)); // to get precise value  190.00

const otherNumber =12.2312
console.log(otherNumber.toPrecision(3)); // will return precise value but  how much digit should I precise ?
//  we passed 3 so 12.2 will be output
// one more
const otherNumber1= 123.67867; //
console.log(otherNumber1.toPrecision(3));//output : 124  
 // and one more thing
 const otherNumber2=1234.565767
 console.log(otherNumber2.toPrecision(3)); // output : 23e+3  exponetial value why? so be careful 

 const hundreds = 10000000;
 console.log(hundreds.toLocaleString());// output : 10,000,000 ..with commas it's hard to identify number with so many zeroes.. so toLocaleString will add commas and it's easy then
 console.log(hundreds.toLocaleString('en-IN')); //indian format
console.log(Number.MAX_VALUE);

 //+++++++++++++++Math's libraries++++++++++++++++
 console.log(Math); // output : object [Math] {}  let's try to access some properties

 console.log(Math.abs(-4)); // output : 4 ..negative number will be converted into positive .. now let's try to find out that ... can abs convert a positive number into -ve
 console.log(Math.abs(5));//output ; 5 so no it can't convert positive into negative
 console.log(Math.round(4.3));// output : 4 it'll round off as we do but if we want to control to roundoff either upper value or lower value
 console.log(Math.ceil(5.3)); //output ; 6 ...roundoff to upper value
 console.log(Math.floor(5.4)); //output :5 .. roundoff to lower value
 console.log(Math.min(2,34,5,6,74,2,4,5,6,75,1,4)); //output :1 to find lowest value
 console.log(Math.max(42,24,5435,46765,7654,3,4222,)); // output:46765

 // where we're going to use math library most?
 //Math.random
 console.log(Math.random()); // values between 0 to 1 //yup it can be zero
 // for game like dice
 console.log(Math.floor(Math.random()*10)+1);// now value can be 0 to 9 but value can be zero so to avoid this we add 1.

 const min = 10;
 const max = 20;
 console.log(Math.floor(Math.random()*(max-min+1))+min)

 const min1 =1;
 const max1 =6
 console.log(Math.floor(Math.random()*(max1-min1+1))+min1) //yes max value will be 6.

 //okay done with numbers




