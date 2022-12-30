//-------------------------------------------Arredonda o número para baixo------------------------------------------

let num1 = 9.54632;
let num2 = Math.floor(num1);

console.log(num2);

//--------------------------------------------Arredonda o número pra cima--------------------------------------------

num2 = Math.ceil(num1);
console.log(num2);

//----------------------------------------Arredonda para o número mais próximo----------------------------------------

num2 = Math.round(num1);
console.log(num2);

//----------------------------------------------Descobre o maior número------------------------------------------------

console.log(Math.max(1,2,3,4,5,6,7,8,9));

//----------------------------------------------Descobre o menor número------------------------------------------------

console.log(Math.min(14, 98, -214, 64, 0, -1));

//----------------------------------------------Descobre o maior número------------------------------------------------

let num3 = Math.random();                                // Gera um número entre 0 e 1, sendo que nunca chega em 1
let num4 = Math.random() * (10 - 5) + 5;                // Gera um número entre 5 a 10
let num5 = Math.round(Math.random() * (10 - 5) + 5);   // Gera um número entre 5 a 10 sem casas decimais

console.log(`num3: ${num3}`);
console.log(`num4: ${num4}`);
console.log(`num5: ${num5}`);
