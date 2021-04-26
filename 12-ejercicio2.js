'use strict'

/*
El usuario va introduciendo números por pantalla hasta que introduzca un número negativo,
en ese caso se mostrará el resultado: Mostrar la media y la suma de los números positivos introducidos.
Utilizar un bucle.
*/

let numero =0;
let suma =0;
let media; 

while (numero >= 0){
    numero = parseInt(prompt("introduce un numero"));
    if (numero>=0) {
        suma = suma + numero;
    }

    media = (suma/3);
}


document.write("La suma es igual a: " + suma + " y la media es igual a: " + media);


