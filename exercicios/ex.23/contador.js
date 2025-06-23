function contar() {
    let saida = document.getElementById('saida')

    for(let c = 2; c <= 50; c += 2){
        saida.innerHTML += ` ${c}&#x1F449;`
    }

}

function contar2() {
    let saida2 = document.getElementById('saida2')

    for(let c2 = 1; c2 <= 50; c2 += 2){
        saida2.innerHTML += ` ${c2}&#x1F449;`
    }
}