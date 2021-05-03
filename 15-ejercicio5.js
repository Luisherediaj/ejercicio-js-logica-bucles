'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/

let numero = parseInt(prompt("Escoge los divisores de un numero"));

document.write("<h2>Estos son los divisores "+numero+"</h2>");
for (let i = numero; i >= 1; i--) {
    
   
    if(numero%i == 0){
        document.write("<p>"+i+"</p>");
    }

    
}

