var contador = 0
var res = window.document.querySelector('section#saida')

function acao1() {
    res.innerHTML += `<p><mark>Você clicou no botão 1</mark></p>`
}

function acao2() {
    res.innerHTML += `<p><mark>Você clicou no botão 2</mark></p>`
}

function acao3() {
    res.innerHTML += `<p><mark>Você clicou no botão 3</mark></p>`
}

function acao4() {
    res.innerHTML += `<p><mark>Você clicou no botão 4</mark></p>`
}

function zerar() {
contador = 0
res.innerHTML = `<p>Os botões que você clicar iram aparecer a baixo <hr></p>`
}