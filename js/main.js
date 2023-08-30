$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000', {
     placeholder: '(00)00000-0000'
    });
 
 
    $('form').validate({
     rules: {
        nome: {
            required: true
        },
        telefone: {
             required: true
         },
         email: {
            required: true
         }
     },
     messages: {
         telefone: 'Por favor inserir o telefone',
         nome: 'Por favor, inserir o nome',
         email: 'Por favor inserir o email'
     }
    })
 })