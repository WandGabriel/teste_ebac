const formulario = document.getElementById('form-edit');

function validaValores(num1, num2){    

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    return num1 > num2;

}

console.log(formulario);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.getElementById ('first-number');
    const segundoNumero = document.getElementById ('second-number');
    const resultadovalidacao = validaValores(primeiroNumero.value, segundoNumero.value);
    const mensagemRetornoTrue = `<b>Parabéns o número ${primeiroNumero.value} é maior!<b>`
    const mensagemRetornoFalse = `<b>Refaça o teste novamente o ${primeiroNumero.value} não é maior!</b>`

    if(resultadovalidacao){
        const mensagemSucesso = document.querySelector('.success-validation')
        mensagemSucesso.innerHTML  = mensagemRetornoTrue;
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.style.fontSize= '20px';
        mensagemSucesso.style.background = 'green'

        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        const mensagemSucesso = document.querySelector('.success-validation')
        mensagemSucesso.innerHTML = mensagemRetornoFalse;
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.style.background = 'red';
        mensagemSucesso.style.fontSize= '20px';

        primeiroNumero.value = '';
        segundoNumero.value = '';

        document.querySelector('.success-validation').innerHTML = mensagemRetornoFalse;
    }
})