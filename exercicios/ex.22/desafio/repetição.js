var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('resp')

function clicar() {
    while (inicio <= fim) {
        if (inicio % passo == 0) {
            res.innerHTML += `&#x1F449;<mark><strong>${inicio}</strong></mark>`
        }
        inicio++
    }
}

function zerar() {
    res.innerHTML = null
}