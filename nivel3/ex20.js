// 20. Pedido de uma loja

const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const { produto, preco, quantidade } = pedido;

const calcularTotal = (preco, quantidade) => preco * quantidade;

console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: R$ ${preco}`);
console.log(`Total: R$ ${(calcularTotal(preco, quantidade))}`);