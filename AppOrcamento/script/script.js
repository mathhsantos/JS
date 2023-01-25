class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    } 

    validarDados(){
        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null){
                return false
            } 
        }

        return true
    }
}

class BD{
    constructor(){
        let id = localStorage.getItem('id')

        if( id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProxId(){
        let proximoiD = localStorage.getItem('id')
        return parseInt(proximoiD) + 1
    }

    gravar(d){
        let id = this.getProxId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new BD()

function cadastrarDispesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    let titulo = document.getElementById('exampleModalLabel')
    let corpo = document.getElementById('modal-body')
    let botao = document.getElementById('botaoModal')

    if(despesa.validarDados()){
        bd.gravar(despesa)
        titulo.innerHTML = "Despesa Gravada!"
        titulo.className = 'modal-title text-success'
        corpo.innerHTML = "A despesa foi gravada com sucesso."
        botao.innerHTML = "Voltar"
        botao.className = "btn btn-success"
        $('#modalRegistraDispesa').modal('show')

    } else{
        titulo.innerHTML = "Erro na gravação"
        titulo.className = 'modal-title text-danger'
        corpo.innerHTML = "Existem campos obrigatórios que não foram preenchidos"
        botao.innerHTML = "Voltar e corrigir"
        botao.className = "btn btn-danger"
        $('#modalRegistraDispesa').modal('show')
    }
}
