let num1 = 1; // Number
let num2 = 2.5; // Number

console.log(num1 + num2);

//------------------------------------Convertendo para String------------------------------------

num1 = num1.toString();

console.log(typeof num1);
console.log(num1 + num2);

//----------------------------------Convertendo em número binário----------------------------------

let num3 = 20;
num3 = num3.toString(2);
let num4 = parseInt(num3)

console.log(num3);
console.log(typeof num3);

console.log(num4);
console.log(typeof num4);

//------------------------------------------Precisão decimal-------------------------------------------

let num5 = 15.98451510990;

console.log(num5);
console.log(num5.toFixed(2));
console.log(num5.toPrecision(2));

//-----------------------------------------Verificação de números----------------------------------------

let num6 = 56;
let num7;

num6 = Number.isInteger(num6); // Verifica se é inteiro -> true
num7 = Number.isNaN(num6); // Verifica se é NaN -> false

console.log(num6);
console.log(num7);

//-----------------------------------------Precisão em contas--------------------------------------------

let num8 = 0.7;
let num9 = 0.1;

num8 += num9; // 0.8
num8 += num9; // 0.9
num8 += num9; // 1.00
num8 += num9; // 1.1

// num8 = parseFloat(num8.toFixed(2));
num8 = Number(num8.toFixed(2));

console.log(num8);
console.log(typeof num8);
