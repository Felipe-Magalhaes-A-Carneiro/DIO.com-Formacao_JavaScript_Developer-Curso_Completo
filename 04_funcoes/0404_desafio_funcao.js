// Faça o desafio 2 (I.M.C) em função:

/* 02) O IMC = índice de Massa Corporal é o crit´rio da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos - Condição:
- Abaixo de 18.5 - Abaixo do peso;
- Entre 18.5 e 25 - Peso normal;
- Entre 25 e 30 - Acima do peso;
- Entre 30 e 40 - Obeso;
- Acima de 40 - Obesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / (altura * altura);
};

function classificarImc(imc) {
    if (imc <= 18.5) {
        return "Abaixo de 18.5 - Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Entre 18.5 e 25 - Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Entre 25 e 30 - Acima do peso.";
    } else if (imc >= 30 && imc <= 40) {
        return "Entre 30 e 40 - Obeso.";
    } else {
        return "Acima de 40 - Obesidade Grave.";
    };
};

function main() {
    const peso = 94.0;
    const altura = 1.83;
    const imc = calcularImc(peso, altura);

    console.log("I.M.C: " + imc);
    console.log(classificarImc(imc));
}

main();

