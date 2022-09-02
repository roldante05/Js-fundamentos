
var personas = [{nombre: "", apellido:"", edad: ""}];

document.querySelector('.boton').onclick = function(){

agregar();
campoVacio();
tabla();

}

function agregar() {
    var nombreI = document.querySelector('#txtNombre').value ;
    var apellidoI = document.querySelector('#txtApellido').value ;
    var edadI = document.querySelector('#numEdad').value ;

  return personas.push({nombre: nombreI, apellido: apellidoI, edad: edadI });
}

function campoVacio() {

document.querySelector('#txtNombre').value = "";
document.querySelector('#txtApellido').value = "";
document.querySelector('#numEdad').value = "";
return campoVacio;
}

function tabla() {
    var table = "<tr><th> Nombre </th> <th> Apellido </th> <th> Edad </th> </tr>";
    for (i=1; i<personas.length; i++){
        table +=  "<tr>  <td>" + personas[i]["nombre"] +"</td> <td>"+ personas[i]["apellido"] +"</td> <td>"+ personas[i]["edad"] +"</td> </tr>";
    }
    var mostrarTabla = document.querySelector('.tabla').innerHTML = table;
    return mostrarTabla; 
}

