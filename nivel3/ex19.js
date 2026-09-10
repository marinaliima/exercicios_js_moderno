// 19. Cadastro de jogo

const jogo = {
    titulo: "osu",
    genero: "musical",
    preco: 0
};

const { titulo, genero, preco } = jogo;

const exibirJogo = (titulo, genero, preco) => `${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`;

console.log((exibirJogo(titulo, genero, preco)));