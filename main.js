const form = document.getElementById('form-data');
const imgBody = document.getElementById(`image-trash-01`);
const nomesAgenda = [];
const telefonesAgenda = [];
const imagemLixeiraTabela = '<img src="./images/lixeira.png" alt="Lixeira" />'
let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    criarNovoContato();
    atualizaAgenda();
    exibeListaAgenda();

})

function criarNovoContato() {
    const inputName = document.getElementById('form-name');
    const inputPhone = document.getElementById('form-phone');

    if(nomesAgenda.includes(inputName.value)){
        alert (`O nome ${inputName.value} já foi criado na lista, tente novamente com outro nome`);
    } else {
        nomesAgenda.push(inputName.value);
        telefonesAgenda.push(parseFloat(inputPhone.value));

        let linha = `<tr>`;
        linha += `<td>${inputName.value}</td>`
        linha += `<td>${inputPhone.value}</td>`
        linha += `<td>${imagemLixeiraTabela}</td>`
        linha += `</tr>`

        linhas += linha;
    }

    inputName.value = '';
    inputPhone.value = '';
}

function atualizaAgenda() {
    const tabelaInsercaoDados = document.querySelector('tbody');
    tabelaInsercaoDados.innerHTML = linhas;
}

function exibeListaAgenda(){
    for (let i = 0; i < nomesAgenda.length; i++){
        console.log (nomesAgenda[i]);
    }
}

imgBody.addEventListener('click', function(e){
    console.log("Hello-02");
})
