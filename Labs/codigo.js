// DOM
// var titulo = document.getElementById('titulo1');
// alert(titulo.innerHTML);

// titulo.innerHTML = "Bienvenido al sistema";

// var enunciado = document.querySelector("#textogral"); // Clase
// enunciado = document.querySelector("h3")


// var respuesta = confirm("¿Esta seguro que quiere continuar?")
// alert("La respuesta es " + respuesta)

// var ingreso = parseInt(prompt("Ingrese un nº"));

// Condicional
// Indicar si un nº es mayor que 10
// Sino, indicar si esta entra 10 y 5
// Sino no corresponde a valores pedidos

// if (ingreso > 10) {
// 	alert("El ingreso es mayor que 10")
// 	var nombre = prompt("Ingrese su nombre")
// 	if (nombre == "") {
// 		alert("Valor incompleto")
// 	}
// 	else {
// 		alert("bienvenido al sistema " + nombre)
// 	}
// }
// else if (ingreso <= 10 && ingreso > 5) {
// 	alert("El nº varia entre 10 y 6")
// }
// else {
// 	alert("El ingreso no corresponde a los valores indicados")
// }


// Sentencia Switch (condicional múltiple)

// switch(parametro)  {
// 	case 1:
// 		Evaluamos sentencia 1
// 		break;
// 	case 2:
// 		Evaluamos sentencia 2
// 		break;
// 	case 3:
// 	case 4:
// 		Evaluar sentencia 3-4 (Si se tratan de la misma manera)
// 		break;
// 	default:
// 		Sentencia por defecto
// 		break;
// }

var cant_animal = 0;

// Toby

// switch (cant_animal) {
// 	case 0:
// 		alert("No hay animales para ingresar")
// 		break;
// 	case 1:
// 		var nombre = prompt("Ingrese nombre del animal");
// 		if (nombre == "Toby") {
// 			alert("Bienvenido " + nombre)
// 		}
// 		else {
// 			alert("El animal ingresado no se llama Toby")
// 		}
// 		break;
// 	case 2:
// 	case 3:
// 		alert("Coinicide con la agrupacion del consultorio 1")
// 		break;
// 	default:
// 		alert("No se puede tratar esa cantidad de animales")
// 		break;
// }

// var fecha = new Date()
// var dia = fecha.getDay()
// new Date(año ,mes, dia)
// alert(dia)

// Bucles
// Mientras (while)

// while (condicion) {
// 	Cuerpo del ciclo
// }

// var contador = 6;

// while (contador <= 5) {
// 	document.write("Cantidad actual: " + contador + "<br>") 
// 	contador++;
// 	if (contador == 2) {
// 		break;
// 	}
// }

// document.write("Ciclo detenido")

// DO WHILE (hacer mientras)

// var contador = 1;
// var texto = ''

// do {
// 	texto = texto + contador;
// 	contador++;
// } while (confirm("¿Desea continuar?"));

// alert(texto)

// var resultado = confirm("¿Desea continuar?") 

// alert(resultado)

// FOR

// for ([expresion-inicial]; [condicion]; [expresion-final]) {
// 	sentencia
// }

// Creciente
// var cont=0;
// for (i=1; i<10; i++)  {
// 	cont+=i.toString();
// }
// document.getElementById("contador").innerHTML = cont;

// Decreciente
// var cont=10;
// for (i=9; i>=1; i--) {
// 	cont+=i.toString();
// }
// document.getElementById("contador").innerHTML = cont;

// for (i=1, i<=10; i+=2)  {}   Incrementar en 2 desde 1 a 10
// for (i=100; i>=10; i--) {}   Decrementamos en 1 desde 100 hasta 10

// ARREGLOS
// json
// var empleados = ["Marcela", "Juan", "Emilio", "Ana"]; // Forma mas utilizada
var datos = new Array(150, "Clase de JS", -9, true);

// empleados[1] = "Eduardo";
// ultimo = empleados.length - 1
// document.getElementById("empleados").innerHTML = empleados[ultimo];
// document.getElementById('datos').innerHTML = datos[1];
// alert(empleados.length)

// var persona = ["Rodolfo", "NN", 52, "San Martin 130"];

// Objetos (clave: valor)
// var persona = {nombre: "Rodolfo", apellido: "NN", edad: 52, direccion: "san Martin 130"};
// alert(persona.nombre)

// Arreglo de objetos
// var personas = [{nombre: "Rodolfo", edad: 52}, {nombre: "Emily", edad: 35}];
// alert("Nombre: " + personas[1].nombre + ", edad: " + personas[1].edad);


var empleados = ["Marcela", "Juan", "Emilio", "Ana"]; // Forma mas utilizada

// PUSH (agrega un elemento al final)
// empleados.push("Pablo");

// POP (Elimina el ult elemento)
// empleados.pop();

// UNSHIFT (Agrega un elemento al principio)
// empleados.unshift("Sofía");

// SHIFT (Quita el primer elemento)
// empleados.shift();

// SPLICE (Remueve desde el elem 2, el seg. argumento indica cuantos elem. remueve,
//         el tercer arg. es el reemplazo)
// empleados.splice(2, 1, "Lucas");

// CONCAT (Une 2 arreglos)
var felinos = ["León", "Tigre"];
var reptiles = ["Vibora", "Lagarto"];
var zoo = felinos.concat(reptiles, empleados);

// SLICE (Parte un arreglo desde cierta posición)
var nombres = ["Juan", "Marcelo", "Mario", "María", "Elena"];
var chicas = nombres.slice(3)

// MATRIZ
			// COLS     1 (i:0)    2 (i:1) 3 (i: 2)	
var personas_mtrx = [["Macarena", "Lopez", 45],    // F. 1  (Ind: 0)
					 ["Sofía", "Gonzales", 36],    // F. 2  (Ind: 1)
					 ["Ricardo", "Gomez", 24],     // F. 3  (Ind: 2)
					 ["Nombre", "Apellido", 50]]   // F. 4  (Ind: 3)

// personas_mtrx[1][0] = "Emily";
// alert(personas_mtrx[1][0])

// Mostrar elementos de un matriz
var datos_personas = '';
for (i=0; i<personas_mtrx.length; i++) {
	datos_personas = datos_personas + "Nombre: " + personas_mtrx[i][0] + ", Apellido: " + personas_mtrx[i][1] + ", Edad: " + personas_mtrx[i][2] + "<br>";
}

document.getElementById("matriz").innerHTML = datos_personas;

// Mostrar por pantalla un arreglo de objetos, pero con fomato tabla
// var personas = [{nombre: "Rodolfo", apellido: "Gomez", edad: 52}, {nombre: "Emily", apellido: "Lopez", edad: 35}];