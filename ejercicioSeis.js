// var datos = ["Dante", "Roldan"];
// datos.push("Augusto")
// // document.getElementById('titulo').innerHTML =  datos;


// var ejem = [2, 3, 4, true, "Holas"];

// ejem.push(prompt("Escribe algo"));


var personas = [{nombre: "Rodrigo", apellido:"Gomez", edad: "20"},
{nombre: "Dante", apellido:"Gomez", edad: "20"},
{nombre: "Sofia", apellido:"Gomez", edad: "20"}];

var table = "<tr><th> Nombre </th> <th> Apellido </th> <th> Edad </th> </tr>";

for (i=0; i<personas.length; i++){
    table +=  "<tr>  <td>" + personas[i]["nombre"] +"</td> <td>"+ personas[i]["apellido"] +"</td> <td>"+ personas[i]["edad"] +"</td> </tr>";
} 
//  console.log(nombre);
// document.write(nombre)

document.querySelector('.tabla').innerHTML = table;