import React from 'react';


class Pedido extends React.Component {
    // function Navegacao(){
    render() {
        return (
            <div>
                <header className="navbar">
                    <div className="container-fluid">
                        <a className="link" href="Navegacao">Ful Stack Eletro</a>
                        <a className="link" href="Produtos">Produto</a>
                        <a className="link" href="Pedido">Pedido</a>
                        <a className="link" href="Endereço">Loja</a>
                        <a className="link" href="Formulario">Contato</a>
                        <button class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                </header>

                <h1>Realize seu pedido em nosso site!</h1><br />

                <div className="container">
                <div className="row">

                <div className="col">
                    <form>
                        <label for="Nome">Nome</label>
                        <input type="text" className="form-control w-400 p-2" name="nome" placeholder="digite seu nome"></input><br />
                        <label for="Endereço">Endereço</label>
                        <input type="text" className="form-control w-400 p-2" name="Endereço" placeholder="digite seu endereço"></input><br />
                        <label for="Telefone">Telefone</label>
                        <input type="text" className="form-control w-400 p-2" name="Telefone" placeholder="digite seu telefone"></input><br />
                        <label for="NomeProduto">NomeProduto</label>
                        <input type="text" className="form-control w-400 p-2" name="NomeProduto" placeholder="digite seu produto"></input><br />
                        <label for="ValorUnitario">ValorUnitario</label>
                        <input type="text" className="form-control w-400 p-2" name="ValorUnitario" placeholder="digite valor unitario"></input><br />
                        <label for="Quantidade">Quantidade</label>
                        <input type="text" className="form-control w-400 p-2" name="Quantidade" placeholder="digite a quantidade"></input><br />
                        <label for="ValorTotal">ValorTotal</label>
                        <input type="text" className="form-control w-400 p-2" name="ValorTotal" placeholder="digite valor total"></input><br />
                        <button type="submit" class="btn btn-danger  m-1">Enviar</button>
                    </form>
                    </div>
                    </div>
               </div>
          </div>
         

      );
    }
}
export default Pedido;