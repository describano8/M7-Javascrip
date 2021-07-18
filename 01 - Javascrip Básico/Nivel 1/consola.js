// Consolta para los ejercicios del Nivel 1 del M7

// EJERCICIO 1
console.log("Hola Mundo");

// EJERCICIO 2
alert("¡Me llamo David");

// EJERCICIO 3 - Crea una variable que contingui el teu nom i un altre que contingui el teu cognom
let nombre = "David Escribano";
console.log(nombre);

// EJERCICIO 4 - Crea dos variables amb dos números i fes una suma entre ells
let a = 3
let b = 8
console.log( "El resultado de la suma entre los números" + " " + a + " " +  "i" + " " +  b + " " +  "es" + " " + (a + b) );

// EJERCICIO 5 - Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota
// A tener en cuenta que la alerta aparece una vez has aceptado la alerta del ejercicio 2
let nota_examen = 3.5

if (nota_examen > 5) {
  alert("¡Enhorabuena, has aprobado el examen!");
} else {
  alert("Ups! el examen está suspendido... debes seguir estudiando")
}

// EJERCICIO 6 - Reemplaça la paraula blau per la paraula verd en la frase. Després intenta fer-ho remplaçant les o per les u
let str = "Tengo un coche azul";
let res = str.replace("azul", "verde");

console.log(res);

let exampleStr = "Tengo un coche azul";
let oRegex = /o/g;
let result = exampleStr.replace(oRegex , "u");

console.log(result);

// EJERCICIO 7 - Donat el seguit llistat d'objectes, fes un bucle que mostri per pantalla cada objecte i la seva posició al llistat
let objectStr = ['mesa', 'silla', 'ordenador', 'libreta']

objectStr.forEach(consoleItem);

function consoleItem(item, index, arr) {
  console.log("El objetivo " + item +  " se corresponde con la posición " + index);
}

// EJERCICIO 8 - Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2
function calculadora( operador, n1 , n2)
			{
          if (operador == "suma") {
            console.log(n1 + n2);
          }
          else if (operador == "resta") {
            console.log(n1 - n2);
          }
          else if (operador == "multiplicacion") {
             console.log(n1 * n2);
         }

			}

	const resultat = calculadora("resta",40,20);