


 var botones = document.getElementsByTagName('button');


 function saludar(color){
document.querySelector('input').value = "El color es " + color;
// document.querySelector('.content').style.background = color;
document.querySelector('.input').style.background = color;
document.querySelector('.input').style.color = "white";


if(color == "White" || color == "Yellow"){
    document.querySelector('.input').style.color = "black";
}
 }

 for(i=0; i < botones.length; i++){
    botones[i].onclick = function(){
        saludar(this.innerText);
    }
 } 

