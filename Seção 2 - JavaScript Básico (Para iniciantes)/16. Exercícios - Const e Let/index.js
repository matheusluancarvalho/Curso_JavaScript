/*
Matheus Carvalho tem 26 anos, pesa 63,2 kg
tem 1.8 m e seu IMC é de x
 */

const nome = 'Matheus';
const sobrenome = 'Carvalho';
let idade;
let peso;
const altura = 1.67;
let imc;
const anoNascimento = 1996;

idade = 26;
peso = 62.2;

imc = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso,'kg');
console.log('tem', altura, 'm e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

console.log('----------------------Outra forma----------------------');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} m e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);