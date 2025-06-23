function contar() {
    let fnum = document.getElementById('txtn')
    let tab = document.getElementById('tabsel')

    if (fnum.value.length == 0) {
        window.alert('[ERROR] Por favor digite um número.')
    } else {
        let n = Number(fnum.value)
        tab.innerHTML = ``

        for (let c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}