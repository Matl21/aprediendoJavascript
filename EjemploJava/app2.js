console.log("CONECTADO");
   
   //declaramos variables y generamos el evento que 
   var contenido = document.querySelector("#contenido");
   //dentro de la funcion de nuestro evento desencadenamos todo
   document.querySelector("#traer").addEventListener('click', function(){
       var pokemon=document.querySelector('#dato').value.toLowerCase();        
       
    
       //pasamos el parametro en la url es la manera hardcore de hacerlo
       fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon)
       .then(res => res.json())
       .then(data => {
        console.log(data)
        
        
        
        //pasar lo datos a mi html 
        contenido.innerHTML= `
        <img src="${data.sprites.front_default}"  class="bg-dark" width="200px" border="3">
        <div class="container">
        <p>NOMBRE: ${data.species.name.toUpperCase()} </p>
        <p>HABILIDAD 1 : ${data.abilities[0].ability.name.toUpperCase()} </p>
        </div>
        `;
    }).catch(e => {contenido.innerHTML= `POKEMON NO ENCONTRADO`; return console.error( "Este pokemon no ha sido encontrado");  })
        
    })    
        

        


          
