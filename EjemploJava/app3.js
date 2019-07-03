console.log("funcionado");
var formulario=document.getElementById("formulario");
var respuesta=document.getElementById("respuesta");

//submit sera nuestra evento que dispara el formulario
//nuestro submit va se una funcion y le voy
//pasar el parametro e
formulario.addEventListener('submit', function(e){
     e.preventDefault();
    console.log("me diste un click");

    //Usandoo la clase FormData creas un objeto pasando de parametro nuestro formulario
    //va jalar la informacion de formulario en dicho objeto en modo clave, valor y donde
    //nuestra clave va ser el name componente del formulario y luego con lo metodos
    //get y set manipularemos lo datos del objeto datos
    var datos= new FormData(formulario);

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
    fetch('respuesta.php', {
        method: 'POST',
        body: datos
    }).then(res=>res.json())
    .then(data=>{

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
          
      }).catch(e => console.error("ha sucedido algo"));

})

//interactuando con fetch y mi javascript
//todo de forma asincrono es decir de forma inmediata y sin refrescar tenemos
//la respuesta inmediata de nuestro archivo php.!!