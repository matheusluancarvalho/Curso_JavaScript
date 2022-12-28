//               01234567
let umaString = 'Um texto';

console.log(umaString[4]); // Retorna a letra e
console.log(umaString[8]); // Retorna undefined
console.log(umaString[-1]); // Retorna undefined
console.log(umaString.charAt(4)); // Retorna a letra e

console.log(umaString.concat(' ', 'muito lindo')); // Concatena

console.log(umaString.indexOf('texto')); // Mostra o índice onde começa a palavra 'texto'
console.log(umaString.indexOf('texto', 2)); // Procura a palavra 'texto' a partir do índice 2 e mostra em que índice está a palavra 'texto'
console.log(umaString.lastIndexOf('Um', 4)); // Procura a palavra 'Um' a partir do índice 4 e retorna o índice onde está a palavra 'Um'

console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas

console.log(umaString.replace('Um', 'Outro')); // Subistitui a palavra 'Um' por 'Outro'

//-------------------------------------------------------------------------------------------------------------------------------------------
console.log('-----------------------------------------------------------------------');

let outraString = 'O rato roeu a roupa do rei de Roma.';

console.log(outraString.replace(/r/, '#')); // Substitui apenas a primeira lerta 'r' por '#'
console.log(outraString.replace(/r/g, '#')); // Substitui todas as letras 'r' por '#'

console.log(outraString.length); // Mostra o tamanho da String

console.log(outraString.slice(2, 6)); // Printa na tela a palavra desde o índice 2 até o índice 6, que no caso será 'rato'
console.log(outraString.slice(-3)); // É a mesma coisa que o índice 32

console.log(outraString.split(' ')); // Separa cada palavra separada por espaço
console.log(outraString.split(' ', 2)); // Separa cada palavra separada por espaço até o índice 2


/*

Documentação

w3schools (en): https://www.w3schools.com/js/js_string_methods.asp
Modizila (pt): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

*/