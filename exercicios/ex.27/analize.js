let num = document.getElementById('txtn')
let saida1 = document.getElementById('saida1')
let saida2 = document.getElementById('saida2')
valores = []

function liLista(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (liLista(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let n = Number(num.value)

        let item = document.createElement('option')
        item.innerHTML = `Número adicionado: ${n}`
        saida1.appendChild(item)
        saida2.innerHTML = ''
    } else {
        window.alert('Digite um número válido!')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Coloque algum número no campo a cima!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        for(let pos in valores){
            soma += valores[0]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot

        saida2.innerHTML = `<p>No momento temos ${tot} impostos.</p>`
        saida2.innerHTML += `<p>O maior número é: ${maior}</p>`
        saida2.innerHTML += `<p>O menor número é: ${menor}</p>`
        saida2.innerHTML += `<p>A soma dos números é: ${soma}</p>`
        saida2.innerHTML += `<p>A média dos números é: ${media}</p>`
    }
}