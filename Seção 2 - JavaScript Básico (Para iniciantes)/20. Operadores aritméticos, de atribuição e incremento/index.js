/*

-------------------------------------Aritméticos-----------------------------------------------

Adição ou concatenação = +
Subtração = -
Multiplicação = *
Divisão = /
Potenciação = **
Resto da divisão = %

*/

// Exemplos

const num1 = 5;
const num2 = 10;

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num2 - num1}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num2 / num1}`);

/*

-------------------------------------Ordem Aritmética-----------------------------------------------

1. Entre parênteses = ()
2. Potenciação = **
3. Divisão = /
4. Multiplicação = *
5. Soma = +
6. Subtração = -

*/

// Exemplos

const num3 = 2;
const num4 = 5;

console.log(`Resultado da ordem aritmética: ${(num1 + num2)**2/num1*num3+num1-num2}`);

/*

-------------------------------------Interador-----------------------------------------------

1. Incremento = ++ ou +=
2. Decremento = -- ou -=
3. Multiplica = *=
4. Divide = /=

*/

let contador = 2;
let passo = 2;

console.log(++contador);
console.log(--contador);
console.log(contador *= passo);
console.log(contador /= passo);

/*

---------------------------------Conversão e Not a Number----------------------------------------

1. NaN = É o resultado quando se quer fazer uma conta com uma String e número
2. Number() = Função que transforma uma String em um número

*/

// Exemplo

let num_string = '5';
let num_int = 15;

console.log(num_string + num_int);
console.log(num_string * num_int);

num_string = Number('5');

console.log(num_string + num_int);
console.log(num_string * num_int);