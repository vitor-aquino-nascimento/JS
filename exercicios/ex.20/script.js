function mes() {
    var mes = document.querySelector('input#txtmes')
    var saida = document.querySelector('section#saida')
    var estacao


    switch (mes.value.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            document.body.style.backgroundColor='var(--cor3)'
            document.getElementById("fundo").style.backgroundImage="url('imagem/inverno.jpg')"
            break;
        case 'ABRIL': case'MAIO': case'JUNHO':
            estacao = 'PRIMAVERA'
            document.body.style.backgroundColor='var(--cor4)'
            document.getElementById("fundo").style.backgroundImage="url('imagem/primavera.jpg')"
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            document.body.style.backgroundColor='var(--cor2)'
            document.getElementById("fundo").style.backgroundImage="url('imagem/verao.jpg')"
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            document.body.style.backgroundColor='var(--cor1)'
            document.getElementById("fundo").style.backgroundImage = "url('imagem/outono.jpg')"; 
            break


            case '1': case '2': case '3':
                estacao = 'INVERNO'
                document.body.style.backgroundColor='var(--cor3)'
                document.getElementById("fundo").style.backgroundImage="url('imagem/inverno.jpg')"
                break;
            case '4': case'5': case'6':
                estacao = 'PRIMAVERA'
                document.body.style.backgroundColor='var(--cor4)'
                document.getElementById("fundo").style.backgroundImage="url('imagem/primavera.jpg')"
                break
            case '7': case '8': case '9':
                estacao = 'VERÃO'
                document.body.style.backgroundColor='var(--cor2)'
                document.getElementById("fundo").style.backgroundImage="url('imagem/verao.jpg')"
                break
            case '10': case '11': case '12':
                estacao = 'OUTONO'
                document.body.style.backgroundColor='var(--cor1)'
                document.getElementById("fundo").style.backgroundImage = "url('imagem/outono.jpg')"; 
                break
        default:
            estacao = 'INDEFINIDO'
            document.body.style.backgroundColor='var(--cor6)'
            document.getElementById("fundo").style.backgroundColor='var(--cor5)'
            break;
    }
    saida.innerHTML = `<p>No mês de ${mes.value.toUpperCase()}, estaremos na estação: <mark>${estacao}</mark></p>`
}