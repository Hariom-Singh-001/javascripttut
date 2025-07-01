// primitive

// 7types : string , number, boolean, null. undefined, symbol,BigInt

const score = 100;
const scorevalue = 100.3

const isLogggedIn = false

const outsideIn = null


const id = Symbol('123')
const anotherId = Symbol('123')


const bigNumber = 123456789n


// Reference (non primitive)

// Array, Objects,Function


const heros = ["shakti man", "nagraj", "doga"];


let myObj = {

    name:"hariom",
    age: 22,

}


const myFunction = function() {
    console.log("hello om");
    
} 


// *******************************************

// stack (primitve), heap (non-primitive)

let myName = "hariom singh"

let anotherName = myName
                           
anotherName = "MoonMonger"; //maine ismein jab nayi value pass ki to actual value mein koi change nahi hua balki uski ek copy bani stack form meinn aur usmein change hua 

console.log(myName);

console.log(anotherName);


// ye sab heap ke example practice kiyqa hai maine 
// 


let userOne ={
    email: "hariom@gmail.com",
    upi:  "user@ybl"
}

let userTwo = userOne

userTwo.email = "moon@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



