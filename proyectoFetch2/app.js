//nuestro objetos va  tener nombre y un id
//ademas tendra funcionalidad con un metodo reproducir
//todo esto es nuestro objeto harry








//ESTOS SE LLAMA OBJETOS LITERALESSSSSSSSS
//usando una propiedad this dentro de este objeto
//para poder llamar algo dentro de este objeto utilizamos la palabra reservada this

const pelicula= {
    nombre: 'Harry',
    id: 14,
    reproducir(){
        //ESTE ES SOLO UN EJEMPLO PARA REPRODUCCIR NECESISTA MAS CODIGOS
        return `reproducir Pelicula.. ${this.nombre}`; 
    }

}



//console.log(pelicula.reproducir());

//una plantilla para crear mucho molde tendra la propiedades de su contructor por defecto
class Pelicula {

    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducira(){
        return `reproducir Pelicula.. ${this.nombre}`; 
    }

}



class Serie extends Pelicula {

    constructor(nombre,id,capitulo){
        //con estos uso la variable del herencia 
        super(nombre, id);
        this.capitulo=capitulo;
    }

    reproducirCapitulo(){
        return `${this.capitulo} Reproduccion Capitulo...${this.nombre}`;
    }
}



//la reutilizacoin de codigo y encapsulamiento de codigo.
//instaciar es crear un objeto

const peliculaUno= new Pelicula("JOEL", 1);
const peliculaDos= new Pelicula('goku', 2);
const serieUno = new Serie('dexter',3, 55);

console.log(peliculaUno.reproducira());
console.log(peliculaDos.reproducira());


console.log(serieUno.reproducirCapitulo());



