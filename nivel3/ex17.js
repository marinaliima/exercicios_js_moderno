// 17. Média de um aluno

const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const { nome, nota1, nota2 } = aluno;

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

console.log(`${nome} ficou com média ${(calcularMedia(nota1, nota2))}.`);