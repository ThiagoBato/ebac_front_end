$(document).ready(function () {
    $('.cep').mask('00000-000');
    $('.cpf').mask('000.000.000-00');
    $('form').on('submit', function (e) {
        e.preventDefault();
    });
});
