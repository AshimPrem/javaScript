//dates
let myDate = new Date(); //object
console.log(myDate); //output :2024-03-05T16:10:38.515Z -- not readable
console.log(myDate.toString());//outputTue Mar 05 2024 21:42:05 GMT+0530 (India Standard Time) ..little bit readable
console.log(myDate.toDateString()); //output :Tue Mar 05 2024
console.log(myDate.toLocaleDateString()); //output :3/5/2024
console.log(myDate.getFullYear()); // output : 2024 ...year
console.log(typeof myDate); // output : object

// to create a specific date
let myCreatedDate=new Date(2023,0,24); // in javaScript months start from 0
console.log(myCreatedDate.toDateString()); //output : Mon Jan 24 2023
//let's create with time
let myCreatedDate1 = new Date(2024,0,5,16,20,55);
console.log(myCreatedDate1.toString()); //output : Fri Jan 05 2024 16:20:55 GMT+0530 (India Standard Time)

// yy//MM/dd format
let myCreatedDate2 = new Date("03-05-2024");
console.log(myCreatedDate2.toDateString());

//time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);// output : so long digit
console.log(myCreatedDate2.getTime()); // again output so long digit value .. we can compare these in millisecond
console.log(Date.now()); // wanna convert these output values in second then simply divide it by 1000
console.log(Date.now()/1000); // ouput :1709656408.804 will vary .. so problem is that we are getting some decimal value which makes no sense .. how can we remove them?
console.log(Math.floor(Date.now()/1000)); // finally rounded off


// some more functions available for dates
let newDate = new Date();
console.log(newDate.getMonth());// you'll get present month .. now march and we know months in js start from 0 so the output is 2.........similary for day or date or year
//you can use backticks
console.log(`${newDate.getDay()} ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`); //tue 5/2/2024ouput :

// newDate.toLocaleString('default'{
//     weekday:"long"
//  })// ek aur session hoga