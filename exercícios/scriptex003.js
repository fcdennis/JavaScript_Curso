function contagem() {
    if (document.querySelector('input#inicio').value == "" || document.querySelector('input#fim').value == "") {
        window.alert('Informe todos os valores!')
    }
    else {
        let inicio = Number(document.querySelector('input#inicio').value)
        let fim = Number(document.querySelector('input#fim').value)
        let passo = Number(document.querySelector('input#passo').value)
        if (passo == 0) {
            passo = 1
            window.alert('Valor invalido, passo será considerado 1')
        }
        let resultado = document.querySelector('div#resultado')
        resultado.innerHTML = String.fromCodePoint(0x1F3F3) + " : "
        let c = inicio
        if (inicio < fim) {
            do {
                resultado.innerHTML += `${c}`
                resultado.innerHTML += ' ' + String.fromCodePoint(0x1F449) + ' '
                c = c + passo
            } while (c <= fim)
        }
        else {
            do {
                resultado.innerHTML += `${c}`
                resultado.innerHTML += ' ' + String.fromCodePoint(0x1F449) + ' '
                c = c - passo
            } while (c >= fim)
        }
        resultado.innerHTML += String.fromCodePoint(0x1F3F4);
    }
}
