/*

FALSY

1. false
2. 0
3. '', "", ``
4. null / undefined
5.NaN

*/

console.log(10 && NaN && "Olá"); // Retorna NaN
console.log(10 || NaN || undefined || 0 || false || null); // Retorna 10