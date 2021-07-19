
// EJERCICIO 1
const array = ["D","A","v","I","D"]
 
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// EJERCICIO 2
let nombre = ["D","A","V","I","D"]
let vocales = ["A","E","I","O","U","a","e","i","o","u"]

for (let i = 0; i < nombre.length; i++) {

    if (vocales.indexOf(nombre[i])){
        console.log("He encontrado la letra consonante: " + nombre[i])
        } else {
        console.log("He encontrado la letra vocal: "+ nombre[i])
        }

    }

// EJERCICIO 3
var letters = ["D", "A", "V", "I", "D"];

var numLetters = letters.reduce(function(countLetter, letter){
  countLetter[letter] = (countLetter[letter] || 0) + 1;
  return countLetter;
}, {})

console.log(numLetters);

// EJERCICIO 4
const name = ["D","A","V","I","D"]
const surname = [ "E", "S", "C", "R", "I", "B", "A", "N", "O"]
const fullName = [...name,'', ...surname]

console.log(fullName)