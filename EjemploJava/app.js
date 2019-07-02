console.log("estoy funcionando");


//declaracion de variables
var contenido=document.querySelector("#contenido")
document.querySelector('#boton').addEventListener('click', traerDatos);


function traerDatos(){
    //esta comilla especiales o tilde inversa no permiten manejar
    //temple literales es decir html con JS
    contenido.innerHTML=`<p> REMPLAZANDO TODO LO DE DENTRO DE CONTENIDO<p>`;
}
