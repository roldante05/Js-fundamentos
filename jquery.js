function show(){
    $('div').show();
    $('button').text("Desaparecer");
}
function hiden(){
    $('div').hide();
$('button').text("Aparecer");
}

let accion = 0;

$('button').click(function(){

    if(accion == 0){
        hiden();
        accion = 1;
    } else {
        show();
        accion = 0;
    }

})