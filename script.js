//EJERCICIO Nº1
/*
let nombre = prompt("ingresa tu nombre");
let saludar = "Hola ";

function saludo(nombre, saludar) {

    return saludar.toLocaleLowerCase() + nombre.toLocaleLowerCase() + "\n\n" + saludar.toLocaleUpperCase() + nombre.toLocaleUpperCase();
}
console.log(saludo(nombre, saludar));
*/

//EJERCICIO Nº2
/*
let num1 = parseInt(prompt("ingresa un numero"));

let num2 = parseInt(prompt("ingresa otro numero"));
let suma;
let resta;

function sumarRestar(num1, num2) {
    suma = num1 + num2;
    if (num1 < num2) {
        resta = num2 - num1;

    } else {
        resta = num1 - num2;
    }
    return "la resta es : " + resta + "\n\n " + "la suma es : " + suma;


}
console.log(sumarRestar(num2, num1));
*/

//EJERCICIO Nº3
/*
let text = prompt("ingrsa un texto");
let opcion = parseInt(prompt("ingresa opcion\n1-por consola\n2-por ventana emergente"));


function translate(text, opcion) {
    if (opcion == 1) {
        return console.log(text.toUpperCase());
    } else if (opcion === 2) {
        return alert(text.toUpperCase());
    }
}
translate(text, opcion);
*/

//EJERCICIO Nº4
/*
let suma;
let resta;
let multiplicar;
let dividir;
let nu1 = parseFloat(prompt("ingresa un numero"));
let nu2 = parseFloat(prompt("ingresa un numero"));
let opcion = parseInt(prompt("ingresa opcion\n1-Suma\n2-resta\n3-Multiplicar\n4-dividir"));

function calculadora(nu1, nu2, opcion) {
    if (opcion === 1) {
        suma = nu1 + nu2;
        return "la suma es : " + suma;
    } else if (opcion === 2) {
        resta = nu1 - nu2;
        return "la rresta es : " + resta;
    } else if (opcion === 3) {
        multiplicar = nu2 * nu1;
        return "la multiplicacion es : " + multiplicar;
    } else if (opcion === 4) {
        if (nu2 === 0) {
            return "No se puede dividir por cero";
        } else {
            dividir = nu1 / nu2;
            return "La dividision es : " + dividir;
        }
    }




}
console.log(calculadora(nu1, nu2, opcion));*/


//EJERCICIO Nº5  FUNCION CONFIRM ventana de dialogo booleano ok or cancelar
/*
let suma;
let resta;
let multiplicar;
let dividir;
let nu1 = parseFloat(prompt("ingresa un numero"));
let nu2 = parseFloat(prompt("ingresa un numero"));
let opcion = parseInt(prompt("ingresa opcion\n1-Suma\n2-resta\n3-Multiplicar\n4-dividir"));
let continuar = false;

function calculadora(nu1, nu2, opcion) {
    if (opcion === 1) {
        suma = nu1 + nu2;
        return "la suma es : " + suma;
    } else if (opcion === 2) {
        resta = nu1 - nu2;
        return "la rresta es : " + resta;
    } else if (opcion === 3) {
        multiplicar = nu2 * nu1;
        return "la multiplicacion es : " + multiplicar;
    } else if (opcion === 4) {
        if (nu2 === 0) {
            return "No se puede dividir por cero";
        } else {
            dividir = nu1 / nu2;
            return "La dividision es : " + dividir;
        }
    }




}
alert(calculadora(nu1, nu2, opcion));
continuar = confirm("Deseas realizar otra operacion?");
while (continuar === true) {
    nu1 = parseFloat(prompt("ingresa un numero"));
    nu2 = parseFloat(prompt("ingresa un numero"));
    opcion = parseInt(prompt("ingresa opcion\n1-Suma\n2-resta\n3-Multiplicar\n4-dividir"));
    alert(calculadora(nu1, nu2, opcion));
    //continuar = parseInt(prompt("Deseas realisar otra operacion?\n1-continuar\n2-Detener"));
    continuar = confirm("deseas continuar?");

}
alert("Fin de operaciones");

*/

//EJERCICIO Nº6

let curso = [];
let alumno;
do {

    alumno = prompt("ingresa alumnos cuando termines ingresa 'SALIR'");

    curso.push(alumno);
    alumno.toUpperCase()
} while (alumno.toUpperCase() !== "SALIR")
for (let i = 0; i < curso.length - 1; i++) {
    console.log("Alumno :" + (curso[i]).toUpperCase());
}