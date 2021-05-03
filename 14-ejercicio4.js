'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

 var num1 = parseInt(prompt("Introduzca el primer número"));
 var num2 = parseInt(prompt("Introduzca el segundo número"));
  
 document.write("Los números impares que existen entre " + num1 + " y " + num2 + " son: ");
  
  
 for (var i = num1; i < num2; i++) {
     if (i % 2 != 0) {
         document.write("<br>" + i);
     }
 }
  



