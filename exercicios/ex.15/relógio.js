function analizar() {
    var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    var semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    var agora = new Date
    
    var saida = document.getElementById('saida')
    var dia = agora.getDate()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()
    var sem = agora.getDay()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()

    saida.innerHTML = `<p>Dia: ${dia}</p>`
    saida.innerHTML += `<p>Mes: ${meses[mes]}</p>`
    saida.innerHTML += `<p>Ano: ${ano}</p>`
    saida.innerHTML += `<p>Semana ${semana[sem]}</p>`
    saida.innerHTML += `<p>As Horas, Minutos e Segundos: ${hora}:${min}:${seg}</p>`
}