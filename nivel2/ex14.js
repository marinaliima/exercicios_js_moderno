// 14. Apresentando uma pessoa

const pessoa = {
    nome: "Mariana",
    idade: 25,
    profissao: "Desenvolvedora"
};

const { nome, idade, profissao } = pessoa;
const apresentarPessoa = (nome, idade, profissao) => `${nome} tem ${idade} anos e trabalha como ${profissao}.`;

console.log(apresentarPessoa(nome, idade, profissao));