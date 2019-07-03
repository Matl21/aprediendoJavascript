<?php
//trabajaremos con un archivo js
//n archivo en php que mandara la respuesta
//NADA MAS DEBERIA TENER MAS COSAS DE VALIDADCION
//SOLAMENTE INGRESO

//PERO LO UNICO QUE HARA ES DAR RESPUESTA
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];



if ($usuario==="" || $pass==="" ) {
    //RECUERDA QUE FETCH RESPONDE Y RECIBE EN FORMATOS 
    //DIFERENTE EN ESTE CASO JSONN
    echo json_encode('Error');
}else{
    echo json_encode('correcto: <br>Usuario:'.$usuario.'<br>Pass: '.$pass);

}
      
      ?>