 


 var botones = document.getElementsByTagName('button');


 function saludar(color){
document.querySelector('input').value = "El color es " + color;
document.querySelector('body').style.background = color;
 }

 for(i=0; i < botones.length; i++){
    botones[i].onclick = function(){
        saludar(this.innerText);
    }
 } 

