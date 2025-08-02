const marvel_heros = ["thor","loki","ironman"];

const dc_heros = ["batman","spiderman","flash"];


// console.log(marvel_heros.push(dc_heros));  //it will provide the ooutput 4
// ///because it will add the dc_heros array as a single element to marvel_heros

// console.log(marvel_heros); // ["thor", "loki", "ironman", ["batman", "spiderman", "flash"]]

// console.log(marvel_heros.length); // 4
// // The length of the array is 4 because it counts the dc_heros array as a single element.

// const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);


// now we want to do the same thing by sprading the each elemnt 

// const all_new_heros = [...marvel_heros, ...dc_heros]
// //   it treats every elemmnt of two different arrays as single and aindividaul item and join them together 
// // it returns a new array
// console.log(all_new_heros);

// flat 

// used to convert the nested array into single array 
const another_array = [1,2,3,[4,5,6],7,[45,36,[3,4,5]]]

const new_another_array = another_array.flat(Infinity)
//inside the brackets of the flat we provide the depth of the array 
// Or simply means that jitna bhi andar aarray ho usko break karke single element mein convert kardo aur kisi ek array mein store kardo 

// console.log(new_another_array)

// console.log(Array.isArray("Hariom"))

// // const check_array = Array.from("Hariom") 

// WE CAN USE Array.from FOR COVERTING ANY STRING TO ARRAY


// console.log(Array.isArray(check_array))



console.log(Array.from({name: "hariom"})) //interesting case  

// returns a null array becase humne declarre nahi kiya hai ki kiska array bna-na hai 
// 

let scr1 = 100
let scr2 = 300
let scr3 = 400

console.log(Array.of(scr1,scr2,scr3));

//Array.of IS USED TO CONVERT DIFFERENT VALUES OR VARRIABLE INTO SINGLE ARRAY 

