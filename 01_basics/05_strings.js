const name = "hariom"
const repoCount = 3

console.log(name + repoCount + "Value"); // is tarike se likhna is not good habbit 


console.log(`hello my name is ${name} and my repocount is ${repoCount}`); // ismein brackets ke andar single quote nahi laga hai DONT GET CONFUSE FROM IT**********

// ANOTHER WAY TO DEFIneE STRINGS 
const gameName = new String('hariom-hs-hr')

console.log(gameName[0]);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,4);// it does not obey the negative value 
console.log(newString);

const anotherString = gameName.slice(-8,4);//iske andar negative value enter kar saktein hain 
console.log(anotherString);

// trim and replace 

const newStringOne = "   hariom   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hariom.com/hariom%20singh"

console.log(url.replace('%20','-'));  //used to replace the special symbol or white sapces from the url links

console.log(gameName.split('-')); // syntax: console.log(gameName.split('seprator',limit));
























