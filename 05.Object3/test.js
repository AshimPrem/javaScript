// Object De-structure

const  course ={
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Manik Sir"
}
// course.courseInstructor
// accessing object variable in different way
const {courseInstructor} = course
console.log(courseInstructor); // output : Manik sir
// aliasing this one
const {courseInstructor: instructor} = course
console.log(instructor); //output : manik sir ..nice now I don't have to use course.instructor again and again

/*const navbar = ( {company} )=>{
    using de-structuring concept in react js .. just for understanding
}
navbar(company ="Ashim")*/


// API --> apna kaam kisi or par daal do .. pahle values xml file me aati thi n now in json

//JSON
// {
//    " course" : "JavaScript",
//     "instructorName": "Manik Sir",
//     "price" : "free"

// }

// API in array format
[
    {},
    {},
    {}
]