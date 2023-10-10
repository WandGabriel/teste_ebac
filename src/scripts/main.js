const apresentacaoJogadaPlayer = document.getElementById("game-apresentacao-jogador");
const apresentacaoJogadaCPU = document.getElementById('game-apresentacao-cpu');
const jogar = document.getElementById('novaPartida');
const resetarPontuacao = document.getElementById('resetarPontuacao');
const pontuacaoJogador = document.getElementById('pontuacao-jogador');
const pontuacaoCpu = document.getElementById('pontuacao-cpu');
const pontuacaoEmpate = document.getElementById('pontuacao-empate')
const listaDeJogada = ['pedra','papel','tesoura']
const contagemJogos = document.getElementById('contagemRodadas');

let contadorRodadas = 1;
let pontoUser = 0;
let pontoCPU = 0;
let pontoEmpate = 0;


let posicaoJogadaPlayer = "";
let posicaoJogadaCPU = "";

function exibirJogadaPlayer() {
    jogadaPlayer = document.querySelector('input[name="JoKenPo"]:checked').value;
    apresentacaoJogadaPlayer.innerHTML = `<img src="../src/images/${jogadaPlayer}.png" alt="Ícone de ${jogadaPlayer} do Jo-Ken-Pô"/>`
    let salvarJogada = listaDeJogada.indexOf(jogadaPlayer);
    salvarPosicaoJogada(salvarJogada);
}

function exibirJogadaCpu() {
    let exibirJogada = Math.floor(Math.random(listaDeJogada.length)*3);
    posicaoJogadaCPU = exibirJogada;
    apresentacaoJogadaCPU.innerHTML = `<img src="../src/images/${listaDeJogada[exibirJogada]}.png" alt="Ícone de ${listaDeJogada[exibirJogada]} do Jo-Ken-Pô" />`
}

function salvarPosicaoJogada(numeroJogada) {
    posicaoJogadaPlayer = numeroJogada;
}

function exibePlacar(pontosUser, pontosCpu, pontoEmpate, contadorRodadas) {
    contagemJogos.innerHTML = contadorRodadas;
    pontuacaoJogador.innerHTML = pontosUser;
    pontuacaoCpu.innerHTML = pontosCpu;
    pontuacaoEmpate.innerHTML = pontoEmpate;
}

function verificaGanhador(jogadaDoUsuario, jogadaDaCpu) {
    if (jogadaDoUsuario == jogadaDaCpu) {
        pontoEmpate = pontoEmpate +1;
    } else if ((jogadaDoUsuario == 0)  && (jogadaDaCpu == 2) || (jogadaDoUsuario == 1 && jogadaDaCpu == 0) || (jogadaDoUsuario == 2 && jogadaDaCpu == 1)) {
        pontoUser = pontoUser + 1;
    } else {
        pontoCPU = pontoCPU + 1;
    }
}

function contadorDeRodadas(rodada) {
    contadorRodadas = contadorRodadas + 1;
    
}

function resetarJogo() {
    contadorRodadas = 1;
    pontoUser = 0;
    pontoCPU = 0;
    pontoEmpate = 0;
    exibePlacar(pontoUser, pontoCPU, pontoEmpate, contadorRodadas)
}

jogar.addEventListener("click", function() {
    contadorDeRodadas(contadorRodadas);
    exibirJogadaPlayer();
    exibirJogadaCpu();
    verificaGanhador(posicaoJogadaPlayer,posicaoJogadaCPU);
    exibePlacar(pontoUser,pontoCPU,pontoEmpate,contadorRodadas);
})

resetarPontuacao.addEventListener("click", function() {
    resetarJogo();
})