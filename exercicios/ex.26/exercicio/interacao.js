function contar() {
    let num = document.getElementById('fnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert(` [ERROR] Não foi possivel executar. Porfavor ensira um número válido!`)
    } else {
        let n = Number(num.value)
        tab.innerHTML = ``

        for (let c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)

        }
    }

}