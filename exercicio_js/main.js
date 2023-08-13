const formulario = document.getElementById('form-edit');

function validaValores(num1, num2){    
    console.log("Primeiro Número: " + num1);
    console.log("Segundo Número:" + num2);

    console.log("Número: "+num1+ " > Número: "+num2);
    console.log(num1 >num2)
}

console.log(formulario);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.getElementById ('first-number');
    const segundoNumero = document.getElementById ('second-number');
    validaValores(primeiroNumero.value, segundoNumero.value);
})