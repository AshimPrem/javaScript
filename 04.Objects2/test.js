// how to create singleton object or we can say how to declare using constructor ..as literal already studied

// const tinderUser = new Object(); // singleton object
const tinderUser ={}; // non-singleton object
 tinderUser.id ="123ABC"
 tinderUser.name ="Sam"
 tinderUser.isLoggedIn = false ;
// console.log(tinderUser); 
const regularUser ={
    email: "some@gmail.com",
    fullName :{
         userFullName:{
            firstName : "Ashim Prem",
            lastName : "Mahto"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);
// what if full name doesn't exist?
console.log(regularUser.fullName?.userFullName);

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}
const obj4 = { 5:"a",6:"b"}

//how to combine
// const obj3 = {obj1,obj2}
// console.log(obj3); // bekar tarika
const obj3 = Object.assign(obj1,obj2,obj4) //{} optional .. actually object.assign will return obj1 after combining obj1 ..if we don't add {} target
console.log(obj3);
 console.log(obj1===obj3); //true
const obj5 = Object.assign({},obj1,obj2,obj4) 
console.log(obj5);
console.log(obj5===obj1); //false 

// so above all we'll not use 
const obj6 = {...obj1,...obj2,...obj3}
console.log(obj6); // same output ... spread concept is easy one.

// when values comes from database ...array of object
const user =[
    {
        id :1,
        email:"a@gmail.com"
    },
    {
        id :1,
        email:"a@gmail.com"
    },
    {
        id :1,
        email:"a@gmail.com"
    },
    {
        id :1,
        email:"a@gmail.com"
    }
    // array of object
]
console.log(user[1].id); // 1

//some more thing
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // datatype :array :output:  :[ 'id', 'name', 'isloggedIn' ] for loop through it would be helpful
// so we extracted keys similarly i can access values 
console.log(Object.values(tinderUser)); // ourput:[ '123ABC', 'Sam', false ]
console.log(Object.entries(tinderUser));// output : [ 'id', '123ABC' ], [ 'name', 'Sam' ], [ 'isloggedIn', false ] ]
//when we loop through ..sometimes we try to access some value and that value might not be present then the chances of program crash increases so what can we do to prevent ?manually or we can ask
console.log(tinderUser.hasOwnProperty('isLoggedIn'));