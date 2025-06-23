function contar() {
    let saida = document.getElementById('saida')

    for(c = 50; c >= 0; c -= 1){
        saida.innerHTML += ` ${c}&#x1F449;`
    }
}