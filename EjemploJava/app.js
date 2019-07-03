console.log("estoy funcionando");


//declaracion de variables
var contenido=document.querySelector("#contenido")
document.querySelector('#boton').addEventListener('click', traerDatos);
//PINTAMOS NUESTRO HTML ANTE LIMPIAMOS



function traerDatos(){
    //leyendo el archivo externo
    //la primera promesa then, le decimos que tranforme los datos de tipo texto 
    //que vamos a recibir y que esperamos una respuesta a nuestra promesa
    //con la segunda promesa capturamos la data y la usamos
    fetch('texto.txt')
    .then(data => data.text())
    .then(texto => {
        console.log(texto);
        
    
    //estos solo funciona 
    contenido.innerHTML=`${texto}`;
    }).catch("Ha ocurrido un error");
}
