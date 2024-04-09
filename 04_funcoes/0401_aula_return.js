// O uso de Return em Functions:

/*function quadrado(valor){
    valor * valor;
}*/

//quadrado(); 
// A saída não terá nada, logo é só um Procedimento, mas...

//Utilizando o retun:

function quadrado(valor){
   return valor * valor;
}

//Outra forma de fazer declaração de variaveis, mas com funções
const quadradoDeDez = quadrado(10);

console.log(quadradoDeDez);

//É possivel fazer a função trabalhar com um algoritmo, com a mesma:
console.log(quadrado(15) + quadrado(10));