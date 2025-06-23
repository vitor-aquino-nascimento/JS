let num = document.getElementById('txtn')
let saida1 = document.getElementById('numb')
let saida2 = document.getElementById('saida')
let valores = []

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function verificar() {
    if (!inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let n = Number(num.value)

        let item = document.createElement('option')
        item.innerHTML = ` Número coletado foi ${n}`
        saida1.appendChild(item)
        saida2.innerHTML = ``
    } else {
        window.alert('Esse numero já foi colocado!')
    }
    if (num.value == 0) {
        saida1.innerHTML = ``

        let item = document.createElement('option')
        item.innerHTML = `<mark>Digite um número Válido!</mark>`
        saida1.appendChild(item)
    } else if (num.value > 100) {
        let n = Number(num.value)
        saida1.innerHTML = ``


        let item = document.createElement('option')
        item.innerHTML = `<mark>[ERROR...] INVÁLIDO</mark>`
        saida1.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Digite um número no campo acima!')
        saida2.innerHTML = `[ERROR...] Digite um número Válido!`
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for (let pos in valores) {
            soma += valores[0]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        saida2.innerHTML = ``
        saida2.innerHTML += `<p>Ao todo, temos ${tot} números salvos.</p>`
        saida2.innerHTML += `<p>O maior numero é: ${maior}.</p>`
        saida2.innerHTML += `<p>O menor núemro é: ${menor}.</p>`
        saida2.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        saida2.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
    }
}