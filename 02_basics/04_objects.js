// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sumit"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hariom",
            lastname: "singh"
        }
    }
}


// console.log(regularUser.fullname.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}

const obj3 = {...obj1, ...obj2} //mostly used

// const obj3 = Object.assign({}, obj1,obj2)


console.log(obj3);


const users = [
    {

    },
    {

    },
    {

    }
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//this will make the array of the key value pair




console.log(tinderUser.hasOwnProperty('isLoggedIn')) // to check the avilability of the argument 


// destruturing {object ki}

const course = {

    coursename: "js in hindi",
    price: "999",
    courseInstrutor: "hariom"


}

// call traditonally hum aiise call karte hain
// course.courseInstrutor

const {courseInstrutor: instructor} = course //this is called destructuring (apne hisab se naam dena)

// console.log(courseInstrutor);

// or

console.log(instructor);



