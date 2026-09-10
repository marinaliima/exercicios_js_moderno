// 8. Primeira desestruturação

const aluno = {
    nome: "Marina",
    idade: 16,
    turma: "2TDS"
};

const { nome, idade, turma } = aluno;

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Turma: ${turma}`);