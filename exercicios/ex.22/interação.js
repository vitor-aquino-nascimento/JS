function contar() {
    var saida = document.getElementById('saida')
    
    var c = 1
    while (c <= 1000) {
        if (c % 10 == 0) {
            saida.innerHTML += `<mark><strong>${c}</strong></mark> &#x1F449;`
        }
        c++
    }
}