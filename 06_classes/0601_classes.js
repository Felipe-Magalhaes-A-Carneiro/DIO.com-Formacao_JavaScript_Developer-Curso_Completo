//Criando classes (class):

//Declaração:
class Pessoa {  //Utilize letra maiúscula para a criação de classes
    nome;
    idade;

    descrever(params) { //método: para criar um método, ou seja, uma função, não há a necessidade de declarar o nome 'function'
        console.log('Meu nome é ' + this.nome + 'e minha idade é ' + this.idade);
    }

};

//Aqui 'Pessoa' é uma classe que descreve como deve ser uma pessoa

//Uma 'instância' é o objeto que é uma 'ocorrência' de uma 'Pessoa':

//Como 'instânciar':
const felipe = new Pessoa(); //Dizendo que felipe é uma Pessoa

console.log(felipe); // Saída: Pessoa { nome: undefined, idade: undefined }
// Já que não houve atribuições, o resultado será undefined

//Fazendo atribuições:
felipe.nome = "Felipe Magalhaes";
felipe.idade = 31;

console.log(felipe) 