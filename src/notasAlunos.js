const nomeDosAlunos = ['Kaenate','Tiusush','Kinae','Xuyalrid','Brol','Fannu','Andbuma','Nimgepi','Saelil','Irseor'];
const notaDosAlunos = [8,4,6,3,5,0,5,6,2,1];
let listaDeAlunosENota = new Map();
let alunoAprovado = [];

criarMapaAlunoENota();
alunosAprovados();
exibeAlunoAprovado();

function criarMapaAlunoENota() {
    for (let i = 0; i < nomeDosAlunos.length; i++) {
        listaDeAlunosENota.set(nomeDosAlunos[i], notaDosAlunos[i]);
    }
}

function alunosAprovados() {
    const notaDeCorte = 6;

    for (let [nome, nota] of listaDeAlunosENota) {
        if (nota >= notaDeCorte) {
            alunoAprovado.push (nome, nota);
        }
    }
}
 function exibeAlunoAprovado () {
    console.log(alunoAprovado);
 }
