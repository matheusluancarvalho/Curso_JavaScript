/*
1.Primitivos

I - São imutáveis
II - string, number, boolean, undefined, null (bigint, symbol)
III - Os valores são copiados

-------------------------------------------------------------------------------------------------------------------------

2.Referência

I - São mutáveis
II - array, object e funtion
III - São passados por referência

*/

//--------------------------------------------------Exemplo 1--------------------------------------------------------

let nome = 'Matheus';
nome = 'Carvalho';
nome[0] = 'R' // Não substitui a letra 'C'

console.log(nome);

let a = 'A';
let b = a;

console.log(a, b);

a = 'M';
console.log(a, b); // O valor de b permanece

//--------------------------------------------------Exemplo 2--------------------------------------------------------

let x = [1, 2, 3];
let y = x;

console.log(x, y);

x.push(4); // Adiciona 4 em ambos os arrays
console.log(x, y);

y = [...x]; // A partir daqui ele faz uma cópia e não é mais alterado por x
x.push(5);
console.log(x, y);
