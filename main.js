$(document).ready(function(){
    console.log($('#create-task'));
})

$('form').on('submit',function(e){
    e.preventDefault();
    
    const taskUser = $('#text-user-form').val();
    const novaDiv = $('<div class="items"></div>');
    const novoItem = $('<li></li>').appendTo(novaDiv);
    $(`<p>${taskUser}</p>`).appendTo(novoItem);
    $(novaDiv).appendTo('ul');
    $('#text-user-form').val('');
})

$('div.items').on('click',function(){
    $(this).toggleClass("itemsSelected");
})