function info() {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()

    var res = document.querySelector('section#saida')

    res.innerHTML = `Os dados coletados foi: ${hora}:${min}`
}