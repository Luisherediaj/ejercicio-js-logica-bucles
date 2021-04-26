'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/

var n1 = prompt("Escribe un número");
var i;
for (i=2;i < n1/2; i++) {
if (n1 % i === 0) {
document.write(i,", ");
}
}
