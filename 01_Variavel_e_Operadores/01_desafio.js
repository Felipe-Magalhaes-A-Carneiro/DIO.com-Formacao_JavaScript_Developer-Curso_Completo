//DESAFIO: Faça um programa para calcular o valor de uma viajem

/* Você terá 3 variáveis, sendo elas:

1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM de viagem

Imprima no console o valor que será gasto para realizar esta viagem*/

//Obs. Utilizarei o modelo Volkswagen Gol. Um carro popular no Brasil.

let precoMedio = 5.79;

let combustivelPorKm = 12; // Volkswagen Gol é de cerca de 10 a 12 km/litro de gasolina em condições mistas de tráfego. 

let distanciaKm = 1580;


let consumoKm = distanciaKm / combustivelPorKm;

let valorGasto = consumoKm * precoMedio;

console.log("Consumo por Km: " + consumoKm.toFixed(2) + " litros." + "\nValor do Consumo: " + "R$" + valorGasto.toFixed(2));