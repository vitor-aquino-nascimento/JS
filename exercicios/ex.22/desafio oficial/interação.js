function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('passos')
    let saida = document.getElementById('resp')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERROR] Verifique os campos, se estão TODOS preenchidos!!')
    } else {
        saida.innerHTML = `<p>Contando...</p>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Impossivel contar')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p){
                saida.innerHTML += ` ${c}`
            }   
        }else{
            for(let c = i; c >= f; c-= p){
                saida.innerHTML += ` ${c}`
            }
        }
    }
}