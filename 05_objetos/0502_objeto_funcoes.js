//É possivel fazer funções dentro dos objetos, quando isso ocorre, elas são chamdas "métodos":

const pessoa = {
    nome: "Felipe",
    idade: 31,

    descrever: function (){
        this // palavra reservada para assumeir o objeto no contexto aonde a function ela está reservada.
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade + ' anos.');
    }
};

pessoa.descrever();

//Acessando dinamicamente valores e objetos. Uso de []
const atributo = "idade";

console.log(pessoa[atributo]); //Saída: 31

//Objetos literais: colocando atributos:
pessoa['idade'] = "31"; // Saída: variável double 31, passa a ser uma string '31', em idade 

console.log(pessoa);