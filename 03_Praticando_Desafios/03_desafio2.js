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

let peso = 102; //kg
let altura = 1.89; //m

const imc = peso / (altura * altura);

if (imc <= 18.5) {
    console.log("IMC: " + imc + "\nAbaixo de 18.5 - Abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
    console.log("IMC: " + imc + "\nEntre 18.5 e 25 - Peso normal.");
} else if (imc >= 25 && imc < 30) {
    console.log("IMC: " + imc + "\nEntre 25 e 30 - Acima do peso.");
} else if (imc >= 30 && imc <= 40) {
    console.log("IMC: " + imc + "\nEntre 30 e 40 - Obeso.");
} else {
    console.log("IMC: " + imc + "\nAcima de 40 - Obesidade Grave.");
};