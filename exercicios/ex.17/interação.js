var saida = document.querySelector('div#saida')

function gerar() {
    var max = 100 //definimos um numero maximo que deve ser sorteado
    var min = 1 // já aqui um minimo
    var dif = max - min
    var aleat = Math.random() // matemática aleatória
    var num = min + Math.trunc(dif * aleat) // depois somamos uma matemática multipla

    saida.innerHTML = `Seu numero sorteado é: ${num}`
}

function zerar() {
    saida.innerHTML = null
}