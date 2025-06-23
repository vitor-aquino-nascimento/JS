function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contagem de 0 até ${num}</h2>`
    for(c = 0; c <= num; c += 1){
        saida.innerHTML += ` ${c}&#x1F449;`
    }
    saida.innerHTML += ` &#x1F3C1;`
}