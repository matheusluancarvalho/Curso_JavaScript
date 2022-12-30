const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');

const raizQuadrada = document.getElementById('raiz-quadrada');
const numeroInteiro = document.getElementById('numero-inteiro');
const numeroNan = document.getElementById('numero-nan');
const numeroAbaixo = document.getElementById('numero-abaixo');
const numeroAcima = document.getElementById('numero-acima');
const numeroDeciamal = document.getElementById('casas-decimais');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML += `A raiz quadrada é: ${numero ** 0.5}`;
numeroInteiro.innerHTML += `O número é inteiro? ${Number.isInteger(numero)}`;
numeroNan.innerHTML += `O número é NaN? ${Number.isNaN(numero)}`;
numeroAbaixo.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}`;
numeroAcima.innerHTML += `Arredondando pra cima: ${Math.ceil(numero)}`;
numeroDeciamal.innerHTML += `Número com duas casas decimais: ${numero.toFixed(2)}`;

