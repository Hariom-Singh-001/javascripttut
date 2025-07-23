// arrays

const myArr = [1,2,3,4,"hariom"]

const myHeros = ["shaktiman","nagaraj"]


const myArr2 = new Array(1,2,3,4)


console.log(myArr[1]); //taking the element from the arrays using index no.

myArr.push(6) //adding the element in the last of the array


myArr.push(7)

// myArr.pop()  to remmove the last element


myArr.unshift(9)  //to add the elemnent in the begning

myArr.shift()  // to rempve the elemnt which was added using upshift


console.log(myArr.includes(9)); //boolean output 
console.log(myArr.indexOf(3)); //provide the inddex of the given value 


const newArr = myArr.join()

console.log(newArr);


console.log(myArr);

// slice and Splice

console.log("A",myArr );


const myn2 = myArr.slice(1,3);




console.log(myn2);


