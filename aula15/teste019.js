function parImpar (n) {
    if (n % 2 == 0){
        return 'Par'
    }
    else {
        return 'Impar'
    }
}
teste = parImpar(6)
console.log(`O valor da função com 1 param é ${teste}`)

function somar (n1=0, n2=0) {
    return n1 + n2
}
teste = somar(5, 6)
console.log(`O valor da função com 2 param é ${teste}`)

function fatorial(n){
    if (n==1){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}
console.log(`O valor da função recursiva é ${fatorial(5)}`)