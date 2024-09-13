class funcionario {
    constructor (nome,salario) {
        this.nome = nome;
        this.salario = salario;
    }
    trabalhar() {
        throw new console.error("Este método deve ser implementado por subclasses.");
        }
        exibirInformacoes(){
            return `nome:${this.nome},salario: R$${this.salario}`
        }
}

class gerente extends funcionario {
    constructor(nome,salario,equipe) {
        super(nome,salario);
        this.equipe = equipe;
    }
    trabalhar() {
        return`${this.nome}está gerenciando a equipe de ${this.equipe}pessoas.`;
    }
}

class desenvolvedor extends funcionario {
    constructor(nome,salario,linguagem) {
        super(nome, salario)
        this.linguagem = linguagem;
    }
    trabalhar () {
        return `${this.nome} está programando em $(this.linguagem).`;
    }
}

const gerente = new gerente("alice",12000, 10);
const dev1 = new desenvolvedor("carlos",8000, "Python");
const dev2 = new desenvolvedor("rafael",7500, "Javascript");

console.log(gerente.exibirInformacoes());
console.log(gerente.trabalhar());

console.log(dev1.exibirInformacoes());
console.log(dev1.trabalhar());

console.log(dev2.exibirInformacoes());
console.log(dev2.trabalhar());