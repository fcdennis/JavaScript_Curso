var numeros = []

function adicionar() {
    if (document.querySelector('input#numero').value == "" || document.querySelector('input#numero').value < 0 || document.querySelector('input#numero').value > 100) {
        window.alert('ERRO! Você precisa informar um número entre 0 e 100')
    } else {
        let numero = Number(document.querySelector('input#numero').value)
        if (numeros.indexOf(numero) != -1) {
            window.alert('ERRO! Número já está na lista de analise.')
        }
        else {
            numeros.push(numero)
            let parcial = document.querySelector('select#parcial')
            let item = document.createElement('option')
            item.text = `Número ${numero} adicionado com sucesso!`
            parcial.appendChild(item)
            resultado.innerHTML = ""
        }
    }
}

function maior(list) {
    let maior = 0
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            maior = list[i]
        } else {
            if (list[i] > maior) {
                maior = list[i]
            }
        }
    }
    return maior
}

function menor(list) {
    let menor = 0
    for (let c = 0; c < list.length; c++) {
        if (c == 0) {
            menor = list[c]
        } else {
            if (list[c] < menor) {
                menor = list[c]
            }
        }
    }
    return menor
}

function somar(list){
    let soma = 0
    for (let j = 0; j < list.length; j++){
        soma += list[j]
    }
    return soma
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('ERRO! Você precisa informar valores válidos para poder ter algum resultado.')
    } else {
        let resultado = document.querySelector('div#resultado')
        resultado.innerHTML = `<p>Temos ao todo ${numeros.length} números digitados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior(numeros)}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor(numeros)}.</p>`
        resultado.innerHTML += `<p>A soma dos números informados é de ${somar(numeros)}.</p>`
        resultado.innerHTML += `<p>A média dos números informados é de ${somar(numeros)/numeros.length}.</p>`
    }
}


/*
let recomeçar = document.createElement('input')
        recomeçar.type = "button"
        recomeçar.value = "Recomeçar"
        resultado.appendChild(recomeçar)
        recomeçar.onClick = recomeça()

        function recomeça(){
    window.alert ('Irá recomeçar')
    window.location.reaload()
}
*/