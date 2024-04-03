/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - O gasto médio de combustível do carro por Km;
5 - Distância em Km de viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 3.42; //Preço médido em São Paulo no momento
const precoGasolina = 5.47; //Preço médido em São Paulo no momento
//const tipoCombustivel = 1; // 1 para etanol e 0 para gasolina
const kmPorLitro = 12;

const tipoCombustivel = 0;

const distanciaKm = 100;

if (tipoCombustivel === 1){
    const valorGasto = (distanciaKm / kmPorLitro) * precoEtanol;
    console.log("Combustivel etanol: " + precoEtanol + "\nValor gasto: R$" + valorGasto.toFixed(2));
} else {
    valorGasto = (distanciaKm / kmPorLitro) * precoGasolina;
    console.log("Combustivel gasolina: " + precoGasolina + "\nValor gasto: R$" + valorGasto.toFixed(2));
}



