var idade = 11
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Não Vota')
}
else {
    if (idade < 18 || idade > 70) {
        console.log('Voto opcional')
    }
    else {
        console.log('Voto obrigatório!')
    }
}
