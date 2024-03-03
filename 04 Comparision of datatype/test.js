// some simple comparision
console.log(2>1); 
console.log(3<1);
console.log(2>=1);
console.log(3<=32);
console.log(2!=4);

// these are easy to predict output 

//but the problem come into the picture when we compare different datatypes:

console.log("2">1); // output : true   why ?because two is greater than 1 .. automatically "2" is converted into a number
console.log("02">1); // true ::: these type of comparision is not predictable , so always take care when you're comparing .. always try to compare same datatype

// some more 
console.log(null>0); // output : false
console.log(null==0); //output : false
console.log(null>=0); // output : true  .. why ?? no predictable result..
                                            // the reason is that an equality check == and comparisions > <  >= >= work differently. comparisions convert null into a  number , treating it as 0. That's why null>=0 is true and null>0 is false.
//strict check 
console.log("2"===3); // now datatype will be checked along with value
// undefined 
console.log(undefined==0);
console.log(undefined>=0);  // same as null but whatever we compare with undefined it'll always give flase
console.log(undefined>0);

// note : Avoid such comparisions..... 