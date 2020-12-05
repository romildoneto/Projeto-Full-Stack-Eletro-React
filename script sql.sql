select descricao from produto;
select *from pedidos;

select pedidos.nomeCliente, produto.descricao, pedidos.quantidade,produto.precofinal
from pedidos inner join produto on produto.idproduto = pedidos.idpedido;