function saudacao() {
    console.log('Bom dia!');
}

function saudacaoComParametro(nome){
    console.log(`Bom dia ${nome}!`);
}

function valorComRetorno(valor){
    return `Bom dia ${valor}!`
}


saudacao();
saudacaoComParametro('Matheus');

const variavel = valorComRetorno('Maria');
console.log(variavel);

//------------------------------------------------------------------------------------------------------------------

/*
Caso o usuário não envie nenhum parâmetro, por padrão defini-se um valor
*/

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado
}

const resultado1 = soma(4, 2);
const resultado2 = soma();

console.log(resultado1);
console.log(resultado2);

//---------------------------------------Outras formas de se declarar funções--------------------------------------------

const raiz1 = function (n) {
    return n ** 0.5
};

const raiz2 = n => n ** 0.5;

console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));
