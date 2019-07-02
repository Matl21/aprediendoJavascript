// Ajax es trabajar de forma asincrona es decir ue nuestro sitio web
// no se va refrescar 
console.log("activo");
// cuando se haga click vamos a retornar una funcion es decir 



//METODOOOOOOOOOO 1 DE HACERLO CON JAVASCRIPT AJAX GET MENOS LINEAS
var botton= document.getElementById("boton").addEventListener('click',function(){
    
    const xhttp1= new XMLHttpRequest(); // declara el objeto xhttp

    xhttp1.open('GET','archivoTxt.txt',true); //configuracion de parametros

    xhttp1.send(); //mandar la peticion si fuera post con lo datos

    //comprobar quetodo halla salido a traves de evento onready y si l estado devuelto son correcto
    xhttp1.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            console.log(this.responseText);
            console.log("hola paso aqui");

            document.getElementById('datos').innerHTML += `<h1>`+this.responseText+`<h1>`
        } 
    }




})







//AJAX SE DIVIDE EN 4 PROCESOS 




//METODOOOOOOOOOOOOOOOOOOOOOO 2 PARA AJAX GET MAS LINEAS PERO MAS FACIL

// var botton= document.getElementById("boton").addEventListener('click', traerDatos);
// function traerDatos() {
//     console.log("AH PRESIONADO EL BOTON")
//     //estos no va a variar instaciamos el inicio para usar ajax
//     const xhttp = new XMLHttpRequest();

//     //configuracion de algunos parametro
//     //primero el metodo a usar en este caso GET
//     //el segundo la direccion a la ruta de lo archivo o metodos
//     //el tercer es un valor para saber si va hacer asincrono
//     xhttp.open('GET', 'archivoTxt.txt', true);

//     //ahora mando la peticion y debemos esperar una respuesta que vendra a nuestro xhttp
//     xhttp.send();

//     //validamos si todo ha sido conrrecto a traves de un evento y los estado que no devuelve la peticion 200 ok
//     //403 FORBIDDDNE 404 NOT FOUNT

//     //atraves del 
//     xhttp.onreadystatechange = function(){
//         if (this.readyState==4 && this.status==200) {
//             console.log(this.responseText);
//         } }}