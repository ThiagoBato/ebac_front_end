const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let n1 = document.getElementById('numero01').value;
    let n2 = document.getElementById('numero02').value;

    const mensagemPositiva = 'Formulário Válido';
    const mensagemNegativa = 'Formulário Inválido';
    const mensagemNumero = 'Por favor, digite um número';
    const mensagemValidacao = document.querySelector('.mensagem_validacao');

    //Condição de validação se foi digitado um número ou texto
    if (isNaN(n1 + n2)) {
        mensagemValidacao.innerHTML = mensagemNumero;
        mensagemValidacao.style.display = 'block';
    } else {
        //Condição que valida se o n1 é menor ou maior que o n2
        if (n1 < n2) {
            mensagemValidacao.innerHTML = mensagemPositiva;
            mensagemValidacao.style.display = 'block';
        } else {
            mensagemValidacao.innerHTML = mensagemNegativa;
            mensagemValidacao.style.display = 'block';
        }
    }

    /*
    //Forma de ser feito com o texto da mensagem diretamente no html

    const mensagemPositiva = document.getElementById('mensagemPositiva');
    const mensagemNegativa = document.getElementById('mensagemNegativa');
    if (n1 > n2) {
        mensagemNegativa.style.display = 'block';
        mensagemPositiva.style.display = 'none';
    } else {
        mensagemPositiva.style.display = 'block';
        mensagemNegativa.style.display = 'none';
    }
    */
});
