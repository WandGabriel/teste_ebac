const apresentacaoJogadaPlayer = document.getElementById("game-apresentacao-jogador");
const apresentacaoJogadaCPU = document.getElementById('game-apresentacao-cpu');

let contadorRodadas = 0;
let pontoUser = 0;
let pontoCPU = 0;

let jogadaPlayer = ""

function resetar() {
    jogadaPlayer = document.querySelector('input[name="JoKenPo"]:checked').value
    apresentacaoJogadaPlayer.innerHTML = `<img src="images/${jogadaPlayer}.png" alt=""/>`
    }

document.getElementById('contagemRodadas').innerHTML = contadorRodadas;