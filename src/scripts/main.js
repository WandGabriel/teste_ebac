const apresentacaoJogador = document.getElementById("game-apresentacao-jogador");

let contadorRodadas = 0;
let pontoUser = 0;
let pontoCPU = 0;

var jogadaPlayer = ""

function resetar() {
    jogadaPlayer = document.querySelector('input[name="JoKenPo"]:checked').value
    console.log(jogadaPlayer);
    apresentacaoJogador.innerHTML = `<img src="${jogadaPlayer}.png alt=""/>`
    }

contadorRodadas =+ 1;

document.getElementById('contagemRodadas').innerHTML = contadorRodadas;

let exemploJogada = ['pedra','papel','tesoura'];
let numeroJogada = Math.floor(Math.random(exemploJogada)*exemploJogada.length);
 console.log(exemploJogada[numeroJogada]);