// 13. Desestruturação diretamente na função

const produto = {
    nome: "Mouse",
    preco: 80
};

const { nome, preco } = produto;
const mostrarProduto = (nome, preco) => `Produto: ${nome} - Preço: R$ ${preco}`;

console.log(mostrarProduto(nome, preco));