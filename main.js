$(document).ready(function(){
    console.log($('#create-task'));
})

$('form').on('submit',function(e){
    e.preventDefault();
    
    const taskUser = $('#text-user-form').val();
    const newDiv = $('<div class="items"></div>');
    const newItem = $('<li></li>').appendTo(newDiv);
    $(`<p>${taskUser}</p>`).appendTo(newItem);
    $(newDiv).appendTo('ul');
    $('#text-user-form').val('');
})

$('ul').on('click','div.items',function(){
    $(this).toggleClass("itemsSelected");
})