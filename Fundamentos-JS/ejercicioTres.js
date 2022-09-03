var rol = prompt("Cual es su rol?");

if(rol === "admin" || rol === "recursos"){

    var clave = prompt("Cual es su clave");

    if (clave === "1234") {

        var nombre = prompt("Cual es su usuario?");

        document.querySelector("h1").innerHTML = "Hola " + nombre + ", bienvenida/o a nuestra aplicación"
        // document.write("Hola " + nombre + ", bienvenida/o a nuestra aplicación");
    }
} else {

    alert("Datos incorrectos");
    
}