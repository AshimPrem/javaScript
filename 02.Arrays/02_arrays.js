const marvel_heroes =["thor","Ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];
// what if we push dc_heroes to the marvel_heroes ? let's see
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // haha array inside array  ..problem with javascript's arrays and that's it can store any type of data ..let's try to access element of dc_heroes via marvel_heroes
console.log(marvel_heroes[3]); // dc_heroes will be stores in the 3rd index of marvel_heroes ..so we can access all dc heroes like this and let's try to access individually
console.log(marvel_heroes[3][1]); // output : flash 

//we can use concate 
marvel_heroes.concat(dc_heroes); // same as push 
console.log(marvel_heroes);   

// concate actually combines two arrays . this method returns a new array without modifying any existing array
// const marvel_and_dc_heroes =marvel_heroes.concat(dc_heroes);
// console.log("concated array :" marvel_and_dc_heroes);

const arr1 = ["apple","banana","mango"];
const arr2 = ["gauva","peanut","orange"];
const arr3 = arr1.concat(arr2);
console.log("concated array of fruits : " ,arr3);

//more easier method ,,, spread() method
const allFruits = [...arr1,...arr2] //instead of using concat we can use this one too because we can concate two or more arrays easily
console.log("spread example : " , allFruits);

//another
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // rare situation
const real_another_array = another_array.flat(Infinity);//returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(real_another_array); //haha sub-array into a array ... nice

// to ask 
console.log(Array.isArray("Ashim")); // haha output : false wanna convert this into an array
console.log(Array.from("Ashim")); // now it's an array
console.log(Array.isArray(arr1)); // output :true .. yep  arr1 is an array
console.log(Array.from({name : "Ashim"})); // empty array ,,,we are passing an object ..it'll ask something like umm should I make arrays of keys or value ? which one ? that's why empty .... and important for interview


// let's say you've some values
const  score1 =100;
const score2 = 200;
const score3 = 300 ; // how to convert these three values into a single array?
console.log (Array.of(score1,score2,score3)) //of returns a new array from a set of elements 