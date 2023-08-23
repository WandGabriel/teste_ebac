$(document).ready(function(){
   $('#form-phone').mask('(00)00000-0000', {
    placeholder: '(00)00000-0000'
   });
   $('#form-cpf').mask('000.000.000-00', {
    placeholder: '000.000.0000-00'
   });
   $('#form-cep').mask('00000-000', {
    placeholder: '00000-000'
   });


   $('form').validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        },
        cpf: {
            required: true
        },
        address: {
            required: false
        },
        cep: {
            required: false
        }
    },
    messages: {
        name: 'Por favor, inserir o nome',
        email: 'Digite um em-mail válido',
        phone: 'Digite um valor válido',
        cpf: 'Digite o número de CPF'
    }
   })
})