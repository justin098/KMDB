﻿function validarMenu()
{         
     var usuario = checkCookie();

    if(usuario=='114330011')
    {//Rol Aprobador
      document.getElementById("mnuCrear").style.display = "none";     
      document.getElementById("mnuSeguridad").style.display = "none";
      document.getElementById("mnuMiCuenta").style.display = "none";    
      $('#idRol').html("RKB0004");
    }

    if(usuario=='114330022')
    {//Rol Administrador     
      $('#idRol').html("RKB0005");
    }

    if(usuario=='114330033')
    {//Rol Modifica - Consulta
      document.getElementById("mnuCrear").style.display = "none";     
      document.getElementById("mnuSeguridad").style.display = "none";
      document.getElementById("mnuMiCuenta").style.display = "none";
     
      $('#idRol').html("RKB0003");
    }
    if(usuario=='114330044')
    {//Rol Aprobador
      document.getElementById("mnuCrear").style.display = "none";     
      document.getElementById("mnuSeguridad").style.display = "none";
      document.getElementById("mnuMiCuenta").style.display = "none";
     
    
      $('#idRol').html("RKB0002");
    }

}
function rechazaRegistro(){
  var comentario = document.getElementById("txtComentario").value;    
  if(comentario===""){
    alert("Se debe ingresar un comentario.");
    return false;
  }else{
    alert("Registro devuelto/rechazado satisfactoriamente.");
    return true;
  }
}

function apruebaRegistro(){
  alert("Registro aprobado satisfactoriamente.");
}

function checkCookie()
{
  var user=getCookie("username");
  if (user != "")
  {
    return user;    
  } 
  else 
  {    
     alert('Usuario no autenticado, o existe un problema al obtener la Cookie')
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}