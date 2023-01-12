var altura = ''
var largura = ''
var vidas = 1
var tempo = 21

var nivel = window.location.search
nivel = nivel.replace('?', '')

AjustaTamanhoPalco()

// inicia a contagem decrescente do relógio
var relogio = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(relogio)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('tempo').innerHTML = tempo
    }}, 1000)

var criarMosca = setInterval(function(){posicao()}, nivel)

//gerando posições diferentes na tela
function posicao(){

    // Verificando se o elemento 'mosca' já existe na tela. Se existir irá remover
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(vidas > 3){
            window.location.href = 'gameover.html'
        }else{
            document.getElementById('c'+vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    
    // Criando img da mosca via DOM
    var imgMosca = document.createElement('img')

    // Atribuindo o estilo a img
    imgMosca.src = 'imagens/mosca.png'
    imgMosca.className = retornaClasse()
    imgMosca.style.transform = retornaLado()
    imgMosca.style.position = 'absolute'
    imgMosca.style.left = posicaox + 'px'
    imgMosca.style.top = posicaoy + 'px'
    imgMosca.id = 'mosca'
    imgMosca.onclick=function(){
        this.remove()
    }

    document.body.appendChild(imgMosca)
}

// Pegando a atual largura e altura da screen
function AjustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
}

// Decidir qual vai ser o tamanho do mosquito na tela
function retornaClasse(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0: return 'mosca1'
        case 1: return 'mosca2'
        case 2: return 'mosca3'
    }
}

// Retorna qual lado o mosquito estara olhando na tela
function retornaLado(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0: var lado = 'ladoA'; break;
        case 1: var lado = 'ladoB'; break;
    }

    switch(lado){
        case 'ladoA': return 'scaleX(1)'
        case 'ladoB': return 'scaleX(-1)'
    }
}