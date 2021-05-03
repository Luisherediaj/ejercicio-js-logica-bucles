/*
Tabla de multiplicar de un número introducido por pantalla
*/

// Pide introducir el número sobre el que generar la tabla
var input = parseInt(prompt("Introduce el número sobre el cual crear la tabla"));

// Introduce encabezados de la tabla
var resultado = "<TR><TH>Multiplicación</TH><TH>Resultado</TH></TR>";

// Bucle que recorre hasta multiplicar por 10
for (i=0;i<=10;i++) {
    resultado += '<tr><td>' + input + 'x' + i + '</td><td>' + (input * i) + '</td></tr>';
}

// Muestra el resultado por pantalla
document.getElementById('tabla').innerHTML = resultado;