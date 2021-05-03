'use strict'

/*
Se le pide a un usuario por pantalla (prompt) un número y el programa nos tiene que mostrar si es par o impar.
Si el número introducido no es válido nos pide de nuevo el número.

*/

do {
    var numero = parseInt(prompt("Numero por pantalla:"));
} while (isNaN(numero));


if(numero%2 == 0){
    
    document.write("<p>El número "+numero+" es PAR</p>");
}else{
   
    document.write("<p>El número "+numero+" es IMPAR</p>");
}
