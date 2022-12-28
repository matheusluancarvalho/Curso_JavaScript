/*
1 - Não podemos criar constantes com palavras reservadas
2 - Constantes precisam ter nomes significativos
3 - Não pode começar o nome de uma constante com um número
4 - Não pode conter espaços ou traços
5 - Utilizamos camelCase
6 - Case-sensitive
7 - Não pode modificar a constante
8 - NÃO SE UTILIZA VAR, UTILIZE CONST*/

const nome = 'João';
//nome = 'Matheus'; -> Não pode
console.log(nome);
console.log('----------------------------------------');

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = 5 * 10;

console.log(resultado);
console.log(typeof resultado);
console.log(typeof nome);
console.log("O tipo 'resultado' é:", typeof(resultado));
console.log("O tipo 'nome' é:", typeof(nome));