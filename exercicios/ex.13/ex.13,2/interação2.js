function analizar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#resp')
    var resf = document.querySelector('div#foto')

    if (fano.value.length == 0 || fano.value > ano) {
        res.innerHTML = `[ERRO] Verifique seus dados e tente novamente.`
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        var genero = ''
        res.innerHTML = `A idade calculada é ${idade}`
    }if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagem/C-M.png')
            //Criança
        }else if(idade < 21){
            img.setAttribute('src', 'imagem/J-M.png')
            //Jovem
        }else if(idade < 50){
            img.setAttribute('src', 'imagem/A-M.png')
            //Adulto
        }else{
            //Idoso
            img.setAttribute('src', 'imagem/I-M.png')
        }
        res.innerHTML = `Detectamos um ${genero} de ${idade}`
        res.appendChild(img)
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagem/C-F.png')
            //Criança
        }else if(idade < 21){
            img.setAttribute('src', 'imagem/J-F.png')
            //Jovem
        }else if(idade < 50){
            img.setAttribute('src', 'imagem/A-F.png')
            //Adulto
        }else{
            //Idoso
            img.setAttribute('src', 'imagem/I-F.png')
        }
        res.innerHTML = `Detectamos uma ${genero} de ${idade}`
        res.appendChild(img)
    }
}