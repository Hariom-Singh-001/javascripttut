const marvel_heros = ["thor","loki","ironman"];

const dc_heros = ["batman","spiderman","flash"];


console.log(marvel_heros.push(dc_heros));  //it will provide the ooutput 4
///because it will add the dc_heros array as a single element to marvel_heros

console.log(marvel_heros); // ["thor", "loki", "ironman", ["batman", "spiderman", "flash"]]

console.log(marvel_heros.length); // 4
// The length of the array is 4 because it counts the dc_heros array as a single element.
