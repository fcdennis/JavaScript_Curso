const parOuImpar = n => n % 2 === 0 ? 'Par' : 'Impar'
console.log(`O valor da função com 1 param é ${parOuImpar(6)}`)
/*
A função acima é a mesma coisa que:

function parOuImpar(n) {
    if (n % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(`O valor da função com 1 param é ${parOuImpar(6)}`)
*/

let somar = (n1=0, n2=0) => n1 + n2
console.log(`O valor da função com 2 param é ${somar(5, 6)}`)
/*
A função acima é a mesma coisa que:

function somar(n1=0, n2=0) {
    return n1 + n2
}
console.log(`O valor da função com 2 param é ${somar(5, 6)}`)
*/


const fatorial = n => n ===1 ? 1 : n * fatorial(n-1)
console.log(`O valor da função recursiva é ${fatorial(5)}`)
/*
A função acima é a mesma coisa que:

function fatorial(n){
    if (n === 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(`O valor da função recursiva é ${fatorial(5)}`)
*/