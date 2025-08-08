// singleton
// Object.create()


// object literals


const mySym = Symbol("key1")



const Jsuser = {
    name: "hariom",
    age: 21,
    "location": "ghazibad",//if aisa likah ho to isko reterive karne ka tarika alag  hai 

    isLoggedIn: false,

    // mySym: "mykey1", can't be use directly 
    // usedd below correctly
    [mySym]: "mykey1",
    lastLoginDays: ["mon", "sat"]
}


console.log(Jsuser.name)
console.log(Jsuser["location"]) //this the another imp method to get the value of the which is written in string format 
// above line reffered to the line no. 15

// learning about declaring the symbol


// console.log(Jsuser.mySym) //iska output to aayega but abhi bhi iiska data type symbol nahi hua hai


// to use it as symbol

console.log(Jsuser[mySym])

console.log(typeof mySym)//this will print the datatype as required 

// to change the vaules

Jsuser.name = "Rabbi"

// console.log(Jsuser)
// to freeze the changes 

Object.freeze(Jsuser)

Jsuser.name = "HAriom" //trying to change the name value after freezing


console.log(Jsuser) //it will not show any error but it cannot change the name after freezing

 



