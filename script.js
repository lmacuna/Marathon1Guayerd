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
let resultado;
let nu1 = parseFloat(prompt("ingresa un numero"));
let nu2 = parseFloat(prompt("ingresa un numero"));
let opcion = parseInt(prompt("ingresa opcion\n1-Suma\n2-resta\n3-Multiplicar\n4-dividir"));

function calculadora(nu1, nu2, opcion) {

    if (opcion === 1) {
        resultado = nu1 + nu2;
        return "la suma es : " + suma;
    } else if (opcion === 2) {
        resultado = nu1 - nu2;
        return "la rresta es : " + resta;
    } else if (opcion === 3) {
        resultado = nu2 * nu1;
        return "la multiplicacion es : " + multiplicar;
    } else if (opcion === 4) {
        if (nu2 === 0) {
            return "No se puede dividir por cero";
        } else {
            resultado = nu1 / nu2;
            return "La dividision es : " + dividir;
        }
    }




}
console.log(calculadora(nu1, nu2, opcion));
*/

//EJERCICIO Nº5  FUNCION CONFIRM ventana de dialogo booleano ok or cancelar
/*
let suma;
let resta;
let multiplicar;
let dividir;
let nu1 = parseFloat(prompt("ingresa un numero"));
let nu2 = parseFloat(prompt("ingresa un numero"));
let opcion = parseInt(prompt("ingresa opcion\n1-Suma\n2-resta\n3-Multiplicar\n4-dividir"));
//let continuar = false;

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
while (continuar) {
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
/*
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
*/

//EJERCICIO Nº7
/*
const nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];
let nombre;

for (let i = 0; i < nombres.length; i++) {
    nombre = nombres[i];

    console.log(i + " " + nombre.charAt(0).toUpperCase() + nombre.slice(1));


}
*/

//EJERCICIO Nº8
/*
const mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];
let mascota;



for (let i = 0; i < mascotas.length; i++) {
    mascota = mascotas[i];
    if (mascota.length > 6) {
        console.log(mascota + ", tiene Nombre largo");

    } else if (mascota.length <= 3) {
        console.log(mascota + ", tiene nombre corto");
    } else if (mascotas[i] === "Fido" || mascota === "Gertrudis") {
        console.log(mascota + " Hay que vacunar contra la rabia");
    } else if (mascota === "Tuerca") {
        console.log("entregar alimento Balanceado a " + mascota);
    } else {
        console.log("sin asignacion pobre " + mascota + " de la calle");
    }
}
*/

//EJERCICIO Nº9
/*
let restaurant = [25, 17, 18, 44, 12, 9, 36, 50];

let total = 0;
let menor = 0;
let desc = 0;
let adulto = 0;
let menoress = 0;
let adultoss = 0;
let menores = [];
let adultos = [];
let cliente;


console.log("LISTA DE COMENZALES: \n\n");
for (let i = 0; i < restaurant.length; i++) {

    cliente = restaurant[i];

    if (cliente < 18) {
        menor = menor + 1;


        console.log(cliente + " Es menor y abona el menú $450");


    } else if (cliente >= 18) {
        adulto = adulto + 1;


        console.log(cliente + " Es adulto y abona el menú $700");

    }





}



console.log("\n\n\nIMPORTE TOTAL POR RANGO DE EDAD: \n\n");

function sumaPorEdad(menor, adulto) {


    //if (menor && adulto) {
    if (adulto > 4) {
        adultoss = 700 * adulto;
        menoress = 450 * menor;
        total = menoress + adultoss;
        desc = (total * 10) / 100;
        total = total - desc;
        alert("Mas de 4 Adultos!!\nDescuento 10% en el total ");
    } else {

        menoress = 450 * menor;
        adultoss = 700 * adulto;
        total = menoress + adultoss;
    }

    return "\nCantidad de menores en la mesa : " + menor + " \nImporte total: $" + menoress + "\n\nCantidad de adultos en la mesa : " + adulto + "\nImporte total: $" + adultoss + "\n\nCantidad de Comenzales: " + (menor + adulto) + "\nTotal final: $" + total;
    // }

}
console.log(sumaPorEdad(menor, adulto));
*/

//EJERCICIO Nº10


let paVip = [];
let todosLosPacientes = [];

function ingresoPacientes() {

    let pacientes = [];
    let pa;
    let paciente;
    let total=0;
    let promedio;
    let valoraciones=[];
    let valoracion;
    let opcion;
    
    do {
        
        
        paciente = parseInt(prompt("Ingresar codigo de paciente entre 1 y 999"));
        for (let i = 0; i < pacientes.length; i++) {


            if (("00" + paciente+"\n") === pacientes[i] || ("0" + paciente+"\n") === pacientes[i] || (paciente+"\n") === pacientes[i]) {

                alert("No puedes duplicar turnos");

                paciente = 1000;

            }
        }


        while (paciente < 0 && paciente === 0 && paciente > 999) {
            paciente = parseInt(prompt("Ingresar codigo de paciente entre 1 y 999"));


        }




        if (paciente > 0 && paciente < 10) {

            pacientes.push("00" + paciente+"\n");

            valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            while (valoracion < 1 || valoracion > 10 || isNaN(valoracion)) {
                valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            }
            valoraciones.push(valoracion);
            total=total+valoracion;
            paVip.push("El paciente vip con turno: " + paciente + " califico el servicio con un: " + valoracion+"\n");
        } else if (paciente > 9 && paciente < 100) {
            pacientes.push("0" + paciente+"\n");

            valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            while (valoracion < 1 || valoracion > 10 || isNaN(valoracion)) {
                valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            }
            valoraciones.push(valoracion);
            total=total+valoracion;
            paVip.push("El paciente vip con turno: " + paciente + " califico el servicio con un: " + valoracion+"\n");
        } else if (paciente === 0) {
            alert("No se puede ingresar cero");
        }else if(paciente>100&&paciente<501){
            pacientes.push(paciente+"\n");
            todosLosPacientes = pacientes;

        }else if(paciente>500&&paciente<1000){ 
            pacientes.sort();
            opcion = confirm("Desea pasarse a vip?");
            if(opcion===true){
              do{  
                  
                  alert("LISTA Paciente: \n"+pacientes+"\n");
                  paciente=0;
                  paciente=Math.floor(Math.random()*99+1);
                  for(let i =0;i<pacientes.length;i++){
                      if(("00"+paciente+"\n")===pacientes[i]||("0"+paciente+"\n")===pacientes[i]){
                        paciente=1000;
                        opcion=confirm("Parece que no hay mas turnos vip continuas?");
                        if(opcion===false){
                            paciente=1001;
                        }
                        
                       }
                    }
                
                        
           
                     
               }while(paciente===1000);  
             
                
          
          
        
           if(paciente>0&&paciente<10){
            pacientes.push("00"+paciente+"\n");
            valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            while (valoracion < 1 || valoracion > 10 || isNaN(valoracion)) {
                valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
            }
              valoraciones.push(valoracion);
              total=total+valoracion;
              paVip.push("El paciente vip con turno: " + paciente + " califico el servicio con un: " + valoracion+"\n");
              
           }else if(paciente>9&&paciente<100){
              
              pacientes.push("0"+paciente+"\n");
              valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
              while (valoracion < 1 || valoracion > 10 || isNaN(valoracion)) {
                  valoracion = parseFloat(prompt("Como califica el servicio?\nde 1 a 10"));
              }
              valoraciones.push(valoracion);
              total=total+valoracion;
              paVip.push("El paciente vip con turno: " + paciente + " califico el servicio con un: " + valoracion+"\n");
           }
              
            
           if(paciente!==1000){
            alert("paciente se paso a categoria vip con el turno Nº"+paciente);
           }else if(paciente===1000){
              // alert("Vuelve a cargar no se puede repetir turnos");
               opcion=true;
               paciente=Math.floor(Math.random()*10+1); 
           }
        
        }else if(opcion===false) {
            pacientes.push(paciente+"\n");
            todosLosPacientes = pacientes;
        }
    
        
    }
   
    
        paciente = confirm("quieres continuar");
      
    } while (paciente);
    pacientes.sort();
    for (let i = 0; i < pacientes.length; i++) {
        //console.log(pacientes[i]);

        if (pacientes[i] > 0 && pacientes[i] < 100) {



            document.write('<div style="margin:auto;padding:10px"><h3 style="margin:15px">Paciente vip</h3></div>');
            document.write('<div style="font-size:20px;width:25%;height:100px;background:red;color:white;text-align:center;margin:10px 10px"><p>paciente Nº</p>' + pacientes[i] + '</div>');
            document.write('<br><br><hr>');






        } else if (pacientes[i] > 99 && pacientes[i] < 501) {
            document.write('<h3 style="margin:15px">Paciente de Prepaga</h3>');
            document.write('<div style="font-size:20px;width:25%;height:100px;background:lightSeagreen;color:darkblue;text-align:center;margin:10px 10px;"><p>paciente Nº</p>' + pacientes[i] + '</div>');
            document.write('<br><br><hr>');
        } 
          else{
            document.write('<h3 style="margin:15px">Paciente de atenciones básicas</h3>');
            document.write('<div style="font-size:20px;width:25%;height:100px;background:cyan;color:smoke;text-align:center;margin:10px 10px;"><p>paciente Nº</p>' + pacientes[i] + '</div>');
            document.write('<br><br><hr>');
            // document.write("Paciente de atencion Normal Nº" + pacientes[i]);
           
        }

    }
    promedio=total/valoraciones.length;
    console.log(promedio.toFixed(5));
    
    return document.write('<div style="width:25%;height:160px;background:grey;color:white;text-align:center"><strong><p>cantidad de pacientes:</strong><br> </p>' + pacientes.length +'<br><br><p>El promedio de valoracion del servicio por los pacientes VIP:</p>' +promedio.toFixed(1)+'</div>');
}
ingresoPacientes();//Entendi el concepto de desglosar en pequeñas funciones e invocarlas desde una funcion principal...en este ejercicio no se aplico ese concepto claramente


paVip.sort();
for (let i = 0; i < paVip.length; i++) {
    document.write('<br><br><div style="text-align:center;padding:20px;border-radius:8px;border:2px solid black;height:40px;width:65%;background:crimson;color:#ccc;font-size:20px"><p><strong>' + paVip[i] + '</strong></p><input type="submit"name="Borrar"></div><br>');
}



