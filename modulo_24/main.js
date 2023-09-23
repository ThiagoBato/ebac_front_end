class Pessoa {
    constructor(_nome, _sobrenome, _idade) {
        this.nome = _nome;
        this.sobrenome = _sobrenome;
        this.idade = _idade;
    }
}

class Funcionario extends Pessoa {
    constructor(_nome, _sobrenome, _idade, _cargo, _salario) {
        super(_nome, _sobrenome, _idade);
        this.cargo = _cargo;
        this.salario = _salario;
    }
}

class Cliente extends Pessoa {
    constructor(_nome, _sobrenome, _idade, _produto, _preco) {
        super(_nome, _sobrenome, _idade);
        this.produto = _produto;
        this.preco = _preco;
    }
}

const pessoa1 = new Pessoa("Douglas", "Baconzits", 28);
const funcionario1 = new Funcionario("Thiago", "Oliveira", 39, "Desenvolvedor Front-end", 12000);
const cliente1 = new Cliente("João", "Francisco", 15, "computador", 3500);

console.log(pessoa1);
console.log(`O nome da pessoa é ${pessoa1.nome} ${pessoa1.sobrenome} e ela tem ${pessoa1.idade} anos.`);

console.log(funcionario1);
console.log(`O nome do funcionário é ${funcionario1.nome} ${funcionario1.sobrenome}, ele tem ${funcionario1.idade} anos, trabalha como ${funcionario1.cargo} e recebe um salário de R$ ${funcionario1.salario}`);

console.log(cliente1);
console.log(`O nome do cliente é ${cliente1.nome} ${cliente1.sobrenome}, ele comprou um ${cliente1.produto} no valor de R$ ${cliente1.preco}`);
