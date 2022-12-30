function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resuldado');

    const pessoas = [];


    function recebeEventoForm(evento){

        evento.preventDefault(); // Evita que envie e atualize a página sem salvar nada

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


/* Uma das formas de enciar o formulario


form.onsubmit = function(evento){ // Envia o formulário
        evento.preventDefault(); // Evita que envie o formulário e atualize em seguida
        alert(1);
        console.log('Foi enviado...');
    };




*/