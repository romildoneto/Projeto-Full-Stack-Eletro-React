<?php
    require_once "./Backend/Api.php";
    
    class Pedidos{
        public $nomeCliente; 
        public $endereco; 
        public $telefone;
        public $nomeProduto;
        public $valorUnitario;
        public $quantidade;
        public $valorTotal;

        public static function getAll()
        {
            $conn = Connection::getDb();

            $inserirDados = $conn->query("SELECT * FROM pedidos");
            return $inserirDados->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function envioPedido()
        {
            $conn = Connection::getDb();
    
            $inserirDados = $conn->query("INSERT INTO pedidos (nomeCliente, endereco,telefone,nomeProduto,valorUnitario, quantidade,valorTotal) VALUES ('$this->nomeCliente', '$this->endereco','$this->telefone','$this->nomeProduto','$this->valorUnitario','$this->quantidade','$this->valorTotal')");                      
            
            if ($inserirDados->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    $pedidosCliente = new Pedidos;
    $pedidosCliente->nome = $_POST['nomeCliente'];
    $pedidosCliente->mensagem = $_POST['endereco'];
    $pedidosCliente->mensagem = $_POST['telefone'];
    $pedidosCliente->mensagem = $_POST['nomeProduto'];
    $pedidosCliente->mensagem = $_POST['valorUnitario'];
    $pedidosCliente->mensagem = $_POST['quantidade'];
    $pedidosCliente->mensagem = $_POST['valorTotal'];

    $validar = $pedidosCliente->envioPedido();
    
   
 if ($validar == true) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
   

   
?>