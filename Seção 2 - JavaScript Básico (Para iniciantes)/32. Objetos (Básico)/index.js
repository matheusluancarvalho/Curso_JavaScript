//---------------------------------------------------------1ª Forma---------------------------------------------------

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade: 26
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//---------------------------------------------------------2ª Forma---------------------------------------------------

function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

/*
Quando o próprio parâmetro tem o mesmo nome do argumento passado, então pode-se fazer da seguinte forma:

function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

*/

//---------------------------------------------------------3ª Forma---------------------------------------------------

const pessoa3 = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade: 26,

    fala(){
        console.log(`A minha idade atual é ${this.idade} anos`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();