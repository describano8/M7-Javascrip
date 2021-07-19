// EJERCICIO 1
const array = ["D","A","V","I","D"]
const html1 = document.getElementById('1');

for (let i = 0; i < array.length; i++) {
  html1.innerHTML += array[i] 
}

//display 
function resultado1() {
  const html1 = document.getElementById('1');
  const displaySetting = html1.style.display;
  displaySetting == 'block' ? html1.style.display = 'none' : html1.style.display = 'block';
}

// EJERCICIO 2
const nombre = ["D","A","V","I","D"]
const vocales = ["A","E","I","O","U","a","e","i","o","u"]
const html2 = document.getElementById('2')

  for (let i = 0; i < nombre.length; i++) {
    vocales.indexOf(nombre[i]) ? html2.innerHTML += "He encontrado la letra consonante: " + nombre[i] + "<br>" : html2.innerHTML += "He encontrado la letra vocal: "+ nombre[i] + "<br>";
  }

  //display 
  function resultado2() {
    const html2 = document.getElementById('2');
    const toggle = html2.style.display;
    toggle == 'block' ? html2.style.display = 'none': html2.style.display = 'block';
  }

// EJERCICIO 3
const letras = ["D","A","V","I","D"]
const repetidas = letras.reduce((obj,lletra) => {
obj[lletra] ? obj[lletra]++ : (obj[lletra] = 1);
  return obj;   
}, {});

const html3 = document.getElementById('3');
const entries = Object.entries(repetidas);

html3.innerHTML = entries;


//display 
function resultado3() {
  const html3 = document.getElementById('3');
  const toggle3 = html3.style.display;
  toggle3 == 'block' ? html3.style.display = 'none' : html3.style.display = 'block';
}

// EJERCICIO 4
const name = ["D","A","V","I","D"]
const surname = [ "E", "S", "C", "R", "I", "B", "A", "N", "O"]
const fullName = [...name,'',...surname]

const html4 = document.getElementById('4');
html4.innerHTML = fullName;

//display 
function resultado4() {
  const html4 = document.getElementById('4');
  const toggle4 = html4.style.display;
  toggle4 == 'block' ? html4.style.display = 'none': html4.style.display = 'block';
}


// EJERCICIO 5
let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
let regex = /([a-zA-Z\u00f1\u00d1_-]+)@[a-zA-Z\u00f1\u00d1_-]*\.([a-zA-Z\u00f1\u00d1_-]+)/g;
let found = str.match(regex);

console.log(found);
const html5 = document.getElementById('5');
html5.innerHTML = found;

//display 
function resultado5() {
  const html5 = document.getElementById('5');
  const toggle5 = html5.style.display;
  toggle5 == 'block' ? html5.style.display = 'none': html5.style.display = 'block';
}