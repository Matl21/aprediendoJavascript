

//Funciones simples
function suma(dato1, datos2){
    return (dato1+datos2);
}

//FUNCIONES ANONIMAS SON LA QUE NO LLEVAN NOMBRE EJEMPLO DE ELLO ES LA FUNCION(e)
// formulario.addEventListener('submit', function(e){});

//FUNCIONES ARROW 
//funcion arrow facilmente devuelve el resultado implitamente esta el return
var sumar=(datos1,datos2) => datos1+datos2;

//COMBINACION DE ENTRE TODA FUNCION ANONIMA, FUNCION ARROZ
//FUNCIONES  IIFE mmediatealy invoked funtion Expression)
(()=>{console.log("HOLA FUNCION IIFE")})();

((nombre = "alguien") => {console.log("HOLA "+nombre)})("carlos");

//temples literales

//tilde inversa no permite hacer un string
//${NOMBRE}


console.log(suma(1,2));


console.log(sumar(1,2));