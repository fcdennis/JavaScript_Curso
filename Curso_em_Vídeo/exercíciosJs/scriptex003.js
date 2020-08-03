function contagem() {
    //Verifica se os campos estão preenchidos
    if (document.querySelector('input#inicio').value == "" || document.querySelector('input#fim').value == "") {
        window.alert('Informe todos os valores!')
    }
    //Se campos estão preenchidos inicia o processo de contagem
    else {
        let inicio = Number(document.querySelector('input#inicio').value)
        let fim = Number(document.querySelector('input#fim').value)
        let passo = Number(document.querySelector('input#passo').value)
        //Avida ao usuario que se passo for setado como 0 será considerado como 1
        if (passo == 0) {
            passo = 1
            window.alert('Valor invalido, passo será considerado 1')
        }
        if (passo < 0){
            passo = passo * (-1)
        }
        let resultado = document.querySelector('div#resultado')
        resultado.innerHTML = String.fromCodePoint(0x1F3F3) + " : "
        //contagem positiva
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c}`
                resultado.innerHTML += ' \u{1F449} '
            }
        }
        //contagem negativa
        else {
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c}`
                resultado.innerHTML += ' \u{1F449} '
            }
        }
        resultado.innerHTML += String.fromCodePoint(0x1F3F4);
    }
}