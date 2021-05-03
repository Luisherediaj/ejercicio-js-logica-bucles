'use strict'

/*
Hacer una calculadora que pida dos números por pantalla.
Si metemos uno mal que nos los vuelva a pedir.
En el cuerpo de la página y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/

function calculaNumeros(){
    do {
        var num1 = parseInt(prompt('Introduce un número'));
        var num2 = parseInt(prompt('Introduce otro numero'));
    } while (isNaN(num1) || isNaN(num2));

    //mostrar en pantalla
    document.write(`${num1} + ${num2} = ${suma(num1, num2)} <br>`);
    document.write(`${num1} - ${num2} = ${resta(num1, num2)} <br>`);
    document.write(`${num1} x ${num2} = ${multiplica(num1, num2)} <br>`);
    document.write(`${num1} / ${num2} = ${division(num1, num2)} <br>`);

}

function suma(numero1, numero2){
    return numero1+numero2;
}

function resta(numero1, numero2){
    return numero1-numero2;
}

function multiplica(numero1, numero2){
    return numero1*numero2;
}

function division(numero1, numero2){
    return numero1/numero2;
}

calculaNumeros();