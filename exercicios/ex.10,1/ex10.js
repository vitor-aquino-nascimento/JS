var idade = 60
if(idade < 16){
    console.log(`Sua idade é ${idade}. Não Vota.`)
}else if(idade <= 17){
        console.log(`Sua idade é ${idade}. Voto Opcional.`)
    }else if(idade >=60){
        console.log(`Sua idade é ${idade}. Voto Opcional.`)
    }else{
        console.log(`Sua idade é ${idade}. Voto Obrigatório.`)
    }