//É possivel fazer funções dentro dos objetos:

const felipe = {
    nome: "Felipe",
    idade: 31,

    descrever: function (){
        console.log("Meu nome é ${this.nome} e minha idade é ${this.idade}");
    }
};

console.log(felipe.descrever);