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
              var str = clave.value;
              if(str.length<8)
              {
                alert("Tamaño de la clave incorrecto.");
                 return false;  
              }
             
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
                 alert('Usuario o contraseña incorrectos.')
                 return false;
              }     
            }                 
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkCookie()
{
  var user=getCookie("username");
  if (user != "")
  {
    switch(user) 
    {
        case '114330011':
         alert("Bienvenid@! Sergio Jiménez");
          break;
        case '114330022':
           alert("Bienvenid@! Justin Calderon");
          break;
          case '114330033':
           alert("Bienvenid@! Christoher Lepiz");
          break;
          case '114330044':
          alert("Bienvenid@! Andres Chinchilla");
          break;
          
        default:
          // code block
    }
    
  } else 
  {
    // user = prompt("Please enter your name:","");
     //if (user != "" && user != null) 
     //{ setCookie("username", user, 30); }
     alert('Usuario no autenticado, o existe un problema al obtener la Cookie')
  }
}

function soloNumeros(e)
{
	var key = window.Event ? e.which : e.keyCode
	return ((key >= 48 && key <= 57) || (key==8))
}