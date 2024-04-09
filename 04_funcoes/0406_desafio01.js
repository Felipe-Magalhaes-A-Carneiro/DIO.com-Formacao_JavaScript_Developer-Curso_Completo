//01) Faça uma função que escreva o seu nome.


function escreverNome (nome){
    return "O meu nome é " + nome + ".";
}

escreverNome("Felipe");

// 02) Faça uma função que verifique se você pe maior de idade.

function verificarIdade (idade){
    if (idade >= 18){
        console.log(escreverNome("Felipe") + " Você é maior de idade.")
    } else {
        console.log("Você é menor de idade.")
    }
}

verificarIdade(31);