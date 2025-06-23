function verificar() {
    var num = Number(window.prompt(`DIGITE UM NÚMERO: `))
    var tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else{
        tipo = '<strong>ÍMPAR</strong>'
    }

    var res = document.querySelector('section#result')
res.innerHTML = `<p>O número ${num} que foi Digitado é ${tipo}!</p>`
}

