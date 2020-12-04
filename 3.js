/* global id1, t1, $t1 */

function CREAR(){
    
    
  var validado = true;
  elementos = document.getElementsByClassName("formu");
  for(i=0;i<elementos.length;i++){
    if(elementos[i].value === " " || elementos[i].value === null){
    validado = false;
    }
  }
  if(validado === true){
    alert("Creacion de cuenta Correcta");
  }else{
  alert("Faltan datos");  
  }
    
}

function ENVIAR(){
    alert("Inicio de sesión Correcto");
}

function AYUDA(){
    alert("Se ha enviado correctamente");
}
function IMPRIMIR(){
    alert("BOLETA DESCARGADA CORRECTAMENTE");
}

$("1").click(function(){
  $($t1).toggle();
});