function validarUsuario()
 {
          document.getElementById("IndexLink").href= "#";

           var clave = document.getElementById('clave');
           var usuario = document.getElementById('usuario');
  
           if(usuario.value == '' || clave.value == '')
           {   
                alert('Debe completar los Campos')
                return false;            
           }
            else
            {
              if (usuario.value == '114330011' || usuario.value == '114330022'||usuario.value == '114330033'||usuario.value == '114330044')
              {
                 
                
                 setCookie("username", usuario.value, 30);
                 checkCookie();

                 var Url =window.location.href;
                  Url= Url.replace("login.html","index.html")
                  //alert(Url);
                  document.getElementById("IndexLink").href= Url;
              }
              else
              {
                 alert('Usuario no valido')
                 return false;
              }     
            }                 
}

function validarMenu()
{         
     var usuario = checkCookie();

    if(usuario=='114330011')
    {//Rol Aprobador
      document.getElementById("mnuCrear").style.display = "none";     
      document.getElementById("mnuSeguridad").style.display = "none";
      document.getElementById("mnuMiCuenta").style.display = "none";
      document.getElementById("ContenedorPrincipal").style.display = "none";
      document.getElementById("IconoBusquedaPrincipal").style.display = "none";
      document.getElementById("BarraBusquedaPrincipal").style.display = "none"
      $('#NombreUsuario').html("Bienvenid@! Sergio Jiménez Soto");
      $('#idRol').html("RKB0004");
    }

    if(usuario=='114330022')
    {//Rol Administrador
      $('#NombreUsuario').html("Bienvenid@! Justin Calderón Valverde");
      $('#idRol').html("RKB0005");
    }

    if(usuario=='114330033')
    {//Rol Modifica - Consulta
        document.getElementById("mnuCrear").style.display = "none";     
        document.getElementById("mnuSeguridad").style.display = "none";
        document.getElementById("spnCrearCategoria").style.display = "none";
        document.getElementById("mnuRevision").style.display = "none";
      //document.getElementById("IconoBusquedaPrincipal").style.display = "none";
      //document.getElementById("BarraBusquedaPrincipal").style.display = "none"
      $('#NombreUsuario').html("Bienvenid@! Christopher Lépiz Muñoz");
      $('#idRol').html("RKB0003");
    }
    if(usuario=='114330044')
    {//Rol Consulta
      document.getElementById("mnuCrear").style.display = "none";     
      document.getElementById("mnuSeguridad").style.display = "none";
      document.getElementById("mnuMiCuenta").style.display = "none";
      document.getElementById("mnuRevision").style.display = "none";
      document.getElementById("OpcionesContainer").style.display = "none";
      //document.getElementById("BarraBusquedaPrincipal").style.display = "none"
      $('#NombreUsuario').html("Bienvenid@! Andrés Chinchilla Jiménez");
      $('#idRol').html("RKB0002");
    }

}

function validaBusqueda(){

  var busqueda=document.getElementById("BarraBusquedaPrincipal").value; 
  if(busqueda==="impresora"){
    location.href = "registrosBusqueda.html";
    return true;
  }else{
    alert("No hay coincidencias con la busqueda.");
    return false;
  }
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
    // user = prompt("Please enter your name:","");
     //if (user != "" && user != null) 
     //{ setCookie("username", user, 30); }
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