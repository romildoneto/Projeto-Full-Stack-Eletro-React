<?php
    require_once "../backend/api.php";
    

    $result = query('SELECT * FROM produto');
    $mensagens=[];

    while($row=mysqli_fetch_assoc($result)){
        $mensagens[]=$row;
    }
            
            
    header("Access-Control-Allow-Origin: *");
    header("Content-type: application/json");
    echo json_encode($mensagens);
    
?>