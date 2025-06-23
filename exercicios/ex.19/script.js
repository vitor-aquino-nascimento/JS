function calc() {
    var n1 = Number(prompt('Digite um numero: '))
    var n2 = Number(prompt('Digite um numero: '))
    var op = Number(prompt(`Com os numero selecionado: ${n1} e ${n2} \nEscolha: \n[1]Somar \n[2]Subtrair \n[3]Multiplicar \n[4]Divitir`))

    var saida = document.getElementById('saida')

    switch(op){
        case 1:
            saida.innerHTML = `Você escolheu somar: ${n1}+${n2}= ${n1+n2}`
            break
        case 2:
            saida.innerHTML = `Você escolheu Subtrair: ${n1}-${n2}= ${n1-n2}`
            break
        case 3:
            saida.innerHTML = `Você escolheu Multiplicar: ${n1}x${n2}= ${n1*n2}`
            break
        case 4:
            saida.innerHTML = `Você escolheu Divitir: ${n1} / ${n2} = ${(n1/n2).toLocaleString('pt-br')}`
            break
        default:
            saida.innerHTML = `[ERRO] <strong>Você não definiu o que devo fazer com: ${n1} e ${n2}</strong>`
    }
}