 //Declaration and initialization
 const myArr = [2,3,4,5,6,7,8,9,9]  //  it can be mixed  and resizable in javascript

 // accessing array element using indexes and indexes start from 0 ...ovlsy basic basic things
 console.log(myArr[6]); //output : 9
 // Arrays in js --. whenever you make copy operation then there are two types of copy
 // (i). shallow copy: a shallow copy of an object  is a copy whose properties share the same reference .. so if make changes in copy then that changes will reflect in original array
  // ii. deep copy : properties do not share the same reference 

  const myHeroes =['shaktiman', 'Hatim'];
  const myArr2 = new Array(1,2,3,4,5,6,5); //dynamically

  //Array methods
//   myArr.push(5); // 5 will be inserted in the last
//   console.log(myArr);
//   myArr.pop();// it'll remove the most recent element added or the last element 
//   console.log(myArr);

  console.log("Before unshifting or shifting : ",myArr);
  myArr.unshift(99); //insert element at veryS first .. it's time consuming function it shifts all the elements present in an array
  console.log("unshifting 99 : ",myArr); 
  myArr.shift();
  console.log("shifting : ",myArr); // will remove very first element  ..

  // includes function to check whether an element is present is or not in an array
  console.log (myArr.includes(5)); //output : true
  console.log (myArr.includes(0)); // output ;false

  //indexOf function --returns the index of the element and if the element is not present in the array then it'll return -1 ... as we know -1 cannot be an index of an array .. so basically it means that the element is not present in the array
  console.log(myArr.indexOf(5)) ; //output : 3
  console.log(myArr.indexOf(6565)) ; //output : -1

  //join() -->
  const newArr= myArr.join()
  console.log(myArr); //output will be in array format 
  console.log(newArr); //It'll be the value of array but the type of the value will be changed .. it'll be a string
  console.log(typeof newArr); //output : string

  // slice() and splice()


  console.log("Original array before slice :",myArr);
  const myArr1 =  myArr.slice(1,3); //argument are indexes of array .. slice will include the first argument but not the second one .. that means it'll include 1,2, indexes so ,, and original array will be same
  console.log(myArr1); // output : 3,4
  console.log("Original array after slice :",myArr);

  
  console.log("Original array before splice :",myArr);
  const myArr3 = myArr.splice(1,3); // it will include both and also the included ones will be removed from the original array
  console.log("spliced element : " ,myArr3);  //output : 3,4,5
  console.log("Original array after splice :",myArr);  
  

