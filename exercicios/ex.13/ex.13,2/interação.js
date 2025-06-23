function clicar() {
    var data =  new Date()
    var ano =  data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#resp')

    if (fano.value.length == 0 || fano.value > ano) {
        res.innerHTML = `[ERRO] Verifique os dados e tente novamente`
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var img = document.createElement('img')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagem/C-M.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/J-M.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/A-M.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagem/I-M.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagem/C-F.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagem/J-F.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagem/A-F.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagem/I-F.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}