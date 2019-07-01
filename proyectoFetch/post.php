<?php
//trabajaremos con un archivo js
// un archivo en php que mandara la respuesta
//NADA MAS DEBERIA TENER MAS COSAS DE VALIDADCION
//SOLAMENTE INGRESO

//PERO LO UNICO QUE HARA ES DAR RESPUESTA
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];



if ($usuario==="" || $pass==="" ) {
    //RECUERDA QUE FETCH RESPONDE Y RECIBE EN FORMATOS 
    //DIFERENTE EN ESTE CASO JSONN
    echo json_encode('LLENA TODOS LO CAMPOS');
}else{
    echo json_encode('correcto: <br>Usuario:'.$usuario.'<br>pass:'.$pass);

}



// fetch('post.php' , {
//         method: 'POST',
//         body: datos })
//     .then(res =>res.json())
//     .then(data=>{
//           console.log(data);
//       })
      
      ?>