/*

Operadores lógicos

&& -> And
|| -> Or
! -> Not

*/

console.log(true && true && true);
console.log(true || true || false);

// Exemplo

const nome = 'Matheus';
const senha = '123456';

const vaiLogar = nome === 'Matheus' && senha === '123456';

console.log(vaiLogar);
console.log(!true);