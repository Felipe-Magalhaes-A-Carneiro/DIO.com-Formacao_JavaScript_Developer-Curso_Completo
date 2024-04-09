/* 03) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e afetuar o cálculo adequado.

Código Condição de pagamento:

- À vista débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let valorProduto = 20.00;
const seDebito = 1;
const seDinheiro = 0;
const seDuasVezes = 0;
const seAcimaDeDuas = 0;

if (seDebito === 1){
    console.log("Valor do produto: R$" + valorProduto + "\nDesconto: 10%" + "\nTotal a pagar: R$" + (valorProduto - (valorProduto * 0.1)));

} else if (seDinheiro === 1){
    console.log("Valor do produto: R$" + valorProduto + "\nDesconto: 15%" + "\nTotal a pagar: R$" + (valorProduto - (valorProduto * 0.15)));

} else if (seDuasVezes === 1) {
    console.log("Valor do produto: R$" + valorProduto + "\nDesconto: Sem desconto" + "\nTotal a pagar: R$" + valorProduto);

} else {
    console.log("Valor do produto: R$" + valorProduto + "\nJuros: 10%" + "\nTotal a pagar: R$" + (valorProduto + (valorProduto * 0.1)));
}