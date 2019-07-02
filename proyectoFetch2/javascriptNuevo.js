
//Los métodos flat y flatMap, nos permiten aplanar arreglos, en otras palabras 
//si tenemos un arreglo el cual posea elementos que sean sub-arreglos, estos nos
// permiten generar un arreglo nuevo, el cual tendrá todos los sub-elementos en el primer nivel.

const array1 = [1, 2, [3, 4]];

const array2 = array1.flat();
// [1, 2, 3, 4]

//Debemos notar también que método excluye huecos o elementos vacíos en el arreglo:



//Por ejemplo, imaginemos que tenemos un arreglo de “equipos”, cada equipo contiene una propiedad 
//que es una lista de “jugadores”, si quisiéramos extraer a todos los jugadores de todos los equipos 
//en un solo arreglo, lo podríamos hacer de la siguiente manera:

const jugadores = equipos.flatMap(e => e.jugadores)



//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto
// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]