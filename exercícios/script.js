function carregar() {
    var img = window.document.querySelector('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 6 && hora < 12) {
        img.src ="_imagens/manha.jpg"
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src ="_imagens/tarde.jpg"
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src ="_imagens/noite.jpg"
        document.body.style.backgroundColor = '#515154'
    }
}
