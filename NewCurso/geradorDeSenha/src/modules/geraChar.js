function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function geraNum(min, max){
    return rand(min, max)
}

function geraChar(min, max){
    return String.fromCharCode(rand(min, max))
}

function geraSimbol(){
    const simbols = '!@#$%&*()-=+/[]{}?|><;.,'
    return simbols[rand(0, simbols.length)]
}
 
export function geraSenha(qtd, numeros, maiuscula, minuscula, simbolos){
    let senhaArray = []

    for(let i = 0; i < qtd; i++){
        numeros && senhaArray.push(geraNum(0, 9))
        maiuscula && senhaArray.push(geraChar(65, 91).toUpperCase())
        minuscula && senhaArray.push(geraChar(65, 91).toLowerCase())
        simbolos && senhaArray.push(geraSimbol())
    }

    return senhaArray.join('').slice(0, qtd)
}
