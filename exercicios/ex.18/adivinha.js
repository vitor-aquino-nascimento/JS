var saida = document.querySelector('div#saida')
var computador = 0
var jogador = 0

function gerar() {
    var min = 0
    var max = 100
    var dif = max - min
    var aleat = Math.random()
    computador = min + Math.trunc(dif * aleat)
}

function jogar() {
    var jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        saida.innerHTML += `<p>Seu numero é <strong>MAIOR</strong> do que a da máquina <br> seu numero foi ${jogador}</p>`
    }else if (jogador > computador) {
        saida.innerHTML += `<p>Seu numero é <strong>MENOR</strong> do que a da máquina <br> seu numero foi ${jogador}</p>`
    }
    else if (jogador == computador){
        saida.innerHTML += `<p>Parabêns esse erá o numero correto!!! <br> ${computador}</p>`
    }
}