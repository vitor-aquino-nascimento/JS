function analizar() {
    var agora = new Date()
    var ano = agora.getFullYear()

    var fcano = document.querySelector('input#txtano')
    var fano = Number(fcano.value)
    var saida = document.querySelector('div#saida')
    var idade = ano - fano
    
    saida.innerHTML = `sua idade é ${idade}`
}