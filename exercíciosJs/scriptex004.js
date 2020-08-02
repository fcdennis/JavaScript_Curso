function tabuada() {
    var numero = Number(document.querySelector('input#numero').value)
    var resultado = document.querySelector('div#resultado')
    let c = 1
    resultado.innerHTML = ""
    do {
        resultado.innerHTML += `${c} `
        c++
    } while (c < numero)
}