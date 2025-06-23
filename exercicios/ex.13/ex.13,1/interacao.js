function clicar() {
    var idade = window.prompt('sua idade é: ')
    var res = document.querySelector('div#idade')
    var resm = document.querySelector('div#foto')

    res.innerHTML = `Sua idade: <strong>${idade}</strong>`

    if (idade >=0 && idade<= 12) {
        resm.innerHTML = `<strong>CRIANÇA</strong> <br> <img src = "imagem/crianca.png" alt = "criança.png">`
    } else if(idade >=13 && idade <= 17){
        resm.innerHTML = `<strong>ADOLECENTE</strong> <br> <img src = "imagem/Sem título.png" alt = "adolecente.png">`
    } else if(idade >=18 && idade <= 59){
        resm.innerHTML = `<strong>ADULTO</strong> <br> <img src = "imagem/adulto.png" alt = "adulto.png">`
    } else{
        resm.innerHTML = `<strong>IDOSO</strong> <br> <img src = "imagem/idoso.png" alt = "idoso.png">`
    }

}