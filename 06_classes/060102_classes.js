// "Instanciar" em programação refere-se ao processo de criar uma instância de uma classe ou objeto. Quando uma classe é instanciada, um novo objeto é criado a partir dessa classe, e este objeto é chamado de instância da classe.

// Classe 
// - Uma classe é um modelo ou blueprint que define propriedades e métodos que os objetos criados a partir dessa classe terão.

// - Exemplo:
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() { //Embora seja uma função, não há necessidade de escrever function quando ela é feita em uma class
      return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
  }
  
// Instância
// - Uma instância é um objeto concreto criado a partir de uma classe.
// - Quando você cria uma nova instância de uma classe, você está basicamente chamando o construtor da classe para criar um novo objeto com as propriedades e métodos definidos pela classe.

const pessoa1 = new Pessoa('João', 30);
const pessoa2 = new Pessoa('Maria', 25);

console.log(pessoa1.saudacao()); // Olá, meu nome é João e eu tenho 30 anos.
console.log(pessoa2.saudacao()); // Olá, meu nome é Maria e eu tenho 25 anos.
