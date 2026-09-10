// 9. Pegando apenas algumas propriedades

const usuario = {
    nome: "Pedro",
    idade: 20,
    email: "pedro@email.com",
    cidade: "São Paulo"
};

const { nome, email } = usuario;

console.log(`${nome} - ${email}`);