function clicar() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var res = document.getElementById('result')
    var resm = document.getElementById('image')

    res.innerHTML = `Agora é exatamente <div id="hr"><strong>${hora}:${min}</strong></div>`

    if (hora < 12) {
        resm.innerHTML = `<h1>Bom dia!!</h1> <img src="imagem/manhã.png" alt="manha.png">`
        document.body.style.background = '#F5F15B'
    } else if (hora < 18) {
        resm.innerHTML = `<h1>Boa tarde!!</h1> <img src="imagem/tarde.png" alt="tarde.png">`
        document.body.style.background = '#5BBEF5'
    } else {
        resm.innerHTML = `<h1>Boa noite!!</h1> <img src="imagem/noite.png" alt="noite.png">`
        document.body.style.background = '#333d8d'
    }
}