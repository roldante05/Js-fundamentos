document.querySelector('.boton').onclick = function(){

var usuario = prompt("Cual es su nombre?");
var admin = prompt("Cual es su rol?");
var clave = prompt("Cual es su contraseña?");

if (admin == "admin" || admin == "recursos" && clave == 1234){
    document.querySelector('#titulo').innerHTML = "Bienvenido " + usuario ;
} else {
    window.location.href = "otrapag.html";
}



var personas = [{nombre: "Rodrigo", apellido:"Gomez", edad: "20"},
{nombre: "Dante", apellido:"Gomez", edad: "20"},
{nombre: "Sofia", apellido:"Gomez", edad: "20"}];

var table = "<tr><th> Nombre </th> <th> Apellido </th> <th> Edad </th> </tr>";

for (i=0; i<personas.length; i++){
    table +=  "<tr>  <td>" + personas[i]["nombre"] +"</td> <td>"+ personas[i]["apellido"] +"</td> <td>"+ personas[i]["edad"] +"</td> </tr>";
} 

document.querySelector('.tabla').innerHTML = table;

}