console.log("funcionado");

//hay que detectar que es cuando el usuario
//escriba javascrip lo detecte y apara eso hay
//muchas opciones

var formulario=document.getElementById("formulario");
var respuesta=document.getElementById("respuesta");
//VAMOS detectar lo que usuario escriba no saltaremos onclick 
//no es muy elegante ni al mejor forma si no que usaremos lo eventos

//detectamos el formulario guardado en la variable
//por eso ussamo de atributo submit en nuestro boton 
//cuando alguien preciose el boton el formulario
//submit sera nuestra funcion
//nuestro submit va se una funcion y le voy
//pasar el parametro e
formulario.addEventListener('submit', function(e){
    ////pasar el parametro e ESTA E
    //no permitira evitar que se ejecute por defecto
    //lo que viene en el navegador que es procesar
    //en el navegar he inpedir que aparezca usuario o pass
    //en la url
    e.preventDefault();
    console.log("me diste un click");

    //USANDO EL formData
    //dentro de los parentesis le pasamos el formulario
    //que va hacer una nueva informacion de formulario
    //
    var datos= new FormData(formulario);

    console.log(datos);
    //usando get y pasando de parametro los nombre
    //de los input donde se le mando la informacion
    //obtenes informacion de ello
    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));

    //usando fetch recibe url en esta caso al archivo donde mandamos datos
    //luego como no es un metodo get entonces hay que especificar
    //mandamos toda la informacion que va ir por
    //nuestro body en esta caso es datos (DATOOS DEL FORMUYLARIO)
    //luego de hacer el fetch 
    //iran nuestra promesa .then con estos
    //y con nuestro punto then recibimos un respuesta
    //y esa respuesta viene en formato json por nuestro
    //post.php no respondera en formato json
    fetch('post.php', {
        method: 'POST',
        body: datos
    }).then(res => res.json())
      .then(data =>{
          console.log(data);
          if(data=="error"){
            respuesta.innerHTML=
          `<div class="alert alert-danger" role="alert">
          LLLENA TODOS LO CAMPO
           </div>`;
          }else{
            respuesta.innerHTML=
          `<div class="alert alert-primary" role="alert">
          ${data}
           </div>`;
          }
          
      })

})

//interactuando con fetch y mi javascript
//todo de forma asincrono es decir de forma inmediata y sin refrescar tenemos
//la respuesta inmediata de nuestro archivo php.!!