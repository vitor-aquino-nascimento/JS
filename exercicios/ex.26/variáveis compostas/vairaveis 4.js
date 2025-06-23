function comecar() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let saida = document.getElementById('saida')
    let pos = num.indexOf(5)

    saida.innerHTML = `de: <strong>${num}</strong> <br>
    sumiu: ${pos}`
}