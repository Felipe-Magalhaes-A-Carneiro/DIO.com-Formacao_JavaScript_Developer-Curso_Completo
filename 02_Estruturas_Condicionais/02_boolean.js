//Estruturas condicionais

//Boolean = True ou False (1 ou 0)

//Exemplo:

const boolean1 = true;
const boolena0 = false;

// 10 > 5 ? "saída: Verdadeiro" (1)
// 10 < 5 ? "saída: False" (0)

const numero = 11;
const numeroPar = (numero % 2) === 0;

console.log("O número é par? " + numeroPar);

if (numeroPar) {
    console.log("Executei um número par.")
} else {
    console.log("Executei um número impar.")
};

// if, else if e else

const numeroPara5 = 15;
const numeroDivisivel5 = (numeroPara5 % 5) === 0;

if (numeroDivisivel5 === 0){
    console.log("O número é inválido.");
} else if (numeroDivisivel5){
    console.log("Sim.");
} else {
    console.log("Não.");
}