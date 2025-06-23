function media() {
var nom = window.prompt(`Qual o nome do aluno?`)

var n1 = Number(window.prompt(`Qaul foi a primeira nota ${nom.toUpperCase()}?`))
var n2 = Number(window.prompt(`Além de ${n1} qual foi a segunda?`))
var p1 = Number(())

med = (n1 + n2)/2

if (med >= 6) {
    msg = `Parabêns`
} else{
    msg = `Estude mais!`
}

var res = document.getElementById(`situacao`)

res.innerHTML = `<p>A média coletada foi de <br> ${nom.toUpperCase()}</p> <hr>`
res.innerHTML += `<p>E as notas de é <strong>${n1}</strong>, na primeira prova e <strong>${n2}</strong>, na segunda prova</p>`
res.innerHTML += `<p>Assim tendo uma média de <br> <mark>${med}</mark></p>`
res.innerHTML += `<div id='resul'>${msg}</div>`
}