var contador = 0
var res = window.document.querySelector('section#result')

function contar() {
    contador ++
    res.innerHTML = `O numero de clicks é: ${contador}`
}

function zerar() {
    contador = 0
    res.innerHTML = `Você zerou!`

}