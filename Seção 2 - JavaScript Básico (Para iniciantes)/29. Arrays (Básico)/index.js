const alunos = ['Matheus', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]);

//------------------------------------------------Muda o valor do Array----------------------------------------------

alunos[2] = 'Ricardo';

console.log(alunos);

//----------------------------------------------Adicionando elementos no Array----------------------------------------

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Vitor';

console.log(alunos);

// Ou

alunos.push('Bruna');
console.log(alunos);

//-----------------------------Adiciona um elemento no inicio do Array e desloca os outros elementos----------------------

alunos.unshift('Geovanne');
console.log(alunos);

//-----------------------------------------------Romove elementos do Array--------------------------------------------------

alunos.pop(); // Último elemento será excluído (Bruna foi removida)
console.log(alunos);

const removido = alunos.pop();
console.log(`O aluno removido: ${removido}`);
console.log(`Nova lista:`, alunos);

alunos.shift(); // Remove o primeiro elemento
console.log(alunos);

//--------------------------------------------------Fatiar um elemento--------------------------------------------------------

console.log(alunos.slice(0,3));
console.log(alunos.slice(0,-2));

//---------------------------------------------------Verifica se é Array-------------------------------------------------------

console.log(alunos instanceof Array);
