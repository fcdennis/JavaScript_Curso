function tabuada() {
    if (document.querySelector('input#numero').value == "") {
        window.alert('ERRO! Digite um número inteiro!')
    }
    else {
        var numero = Number(document.querySelector('input#numero').value)
        var resultado = document.querySelector('select#resultado')
        resultado.innerHTML = ""
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            let multiplicação = numero * c
            item.text = `${numero} X ${c} = ${numero*c}`
            item.value = `tab${c}`
            resultado.appendChild(item)
        } 
    }
}