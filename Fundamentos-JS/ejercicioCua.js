
// var edad = prompt("Cual es tu edad ?");

// if (edad > 18 ){
//     document.querySelector("h1").innerHTML = "Bienvenido"
// } else {
//     document.querySelector("h1").innerHTML = "Error"
// }


var usuario = prompt("Ingrese su usuario");
var clave = prompt("Ingrese su contraseña");

if (usuario === "admin" && clave === "1234") {
    document.querySelector("h1").innerHTML = "Bienvenido " + usuario;
} else {
    document.querySelector("h1").innerHTML = "Datos incorrectos"
}