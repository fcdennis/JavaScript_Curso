function showFoto() {
    var data = new Date()
    var anoNascimento = Number(document.querySelector('input#ano').value)
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNascimento
    var resp = document.querySelector('div#resposta')

    if (idade < 0 || idade > 125) {
        window.alert("ERRO! Verifique os dados novamente.")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'Foto')
        
        if (fsex[0].checked) {
            gênero ="Feminino"
            if (idade < 14) {
                img.setAttribute('src', '_imagens/mulher1+.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', '_imagens/mulher14+.jpg')
            }
            else if (idade < 40) {
                img.setAttribute('src', '_imagens/mulher21+.jpg')
            }
            else if (idade < 60) {
                img.setAttribute('src', '_imagens/mulher40+.jpg')
            }
            else {
                img.setAttribute('src', '_imagens/mulher60+.jpg')
            }
        }
        else {
            gênero = "Masculino"
            if (idade < 14) {
                img.setAttribute('src', '_imagens/homem1+.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', '_imagens/homem14+.jpg')
            }
            else if (idade < 40) {
                img.setAttribute('src', '_imagens/homem21+.jpg')
            }
            else if (idade < 60) {
                img.setAttribute('src', '_imagens/homem40+.jpg')
            }
            else {
                img.setAttribute('src', '_imagens/homem60+.jpg')
            }
        }
        resp.innerHTML = `<p>Detectamos ${gênero} ${idade} anos.</p>`
        resp.appendChild(img)
    }
}