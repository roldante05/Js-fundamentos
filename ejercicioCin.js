
// let fecha = new Date();
// let dia = fecha.getDay();

// switch(){
//     case 0:
//     alert("Hoy Domingo de asado  y river B)");
//     break;
//     case 1:
//         document.write("Que lindo comenzar Lunes")
//         break;
        
//     case 2:
//         document.write("Lindo Martes para estudiar")
//         break;
        
//     case 3:
//         document.write("Miercoles mitad de semana vamo lo pi")
//         break;
        
//     case 4:
//         document.write("Vamos que es Jueves, se acerca el finde")
//         break;
        
//     case 5:
//         document.write("Viernes de pizza ?")
//         break;
        
//     case 6:
//         document.write("Se sale hoy sabado B)")
//         break;
        
//         default:
//             document.write("error");
//             break;
// }

// var resultado = "";
// do {
//     var cadena = prompt("Introduce una cadena?");
    
// if(resultado == ""){
//     resultado = resultado + cadena;
// } else {
//     resultado = resultado + "-" + cadena;
// }
// } while(confirm("Desea seguir?"));
 
// document.write(resultado);

var numsecreto = 20;
do{
    var ingreso = parseInt(prompt('ingrese un nº'));
    
    if(ingreso === numsecreto) {
        document.write(numsecreto);
    } else {
        document.write("");
    }
} while(ingreso != numsecreto);

// document.write(numsecreto);




 






