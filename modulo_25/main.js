//Array de objetos, com os atributos: o nome e a nota dos alunos;
const alunos = [
    {
        nome: "Thiago",
        nota: 10,
    },
    {
        nome: "Bruno",
        nota: 6,
    },
    {
        nome: "Rodrigo",
        nota: 3,
    },
];

//Método para filtrar apenas os alunos com nota igual ou maior do que 6;
const aprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6;
});
//Método para colocar os alunos aprovados em um array e não em um objeto, como estávam alocados na variável aprovados;
const alunosAprovados = aprovados.map((aluno) => {
    return `${aluno.nome} com a nota ${aluno.nota}`;
});
//Método para mostrar os alunos aprovados, com uma separação de vírgula, espaço e quebra de linha entre eles.
console.log(`Os alunos aprovados são:\n ${alunosAprovados.join(",\n ")}`);