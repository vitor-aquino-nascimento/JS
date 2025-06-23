let amigo = {
    nome: 'vitor',
    sexo: 'Masculino',
    peso: '59.9',
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} está com ${amigo.peso}`)