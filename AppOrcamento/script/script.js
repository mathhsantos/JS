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

    recuperaRegistros(){

        let despesas = []
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            let item = JSON.parse(localStorage.getItem(i))

            if(item === null){
                continue
            }

            item.id = i
            despesas.push(item)
        }

        return despesas
    }

    pesquisar(despesa){

        let despesasFiltradas = []
        despesasFiltradas =  this.recuperaRegistros()

        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.ano == despesa.ano})
        }

        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.mes == despesa.mes})
        }

        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.dia == despesa.dia})
        }

        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.tipo == despesa.tipo})
        }

        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.descricao == despesa.descricao})
        }

        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(function(d){ return d.valor == despesa.valor})
        }

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
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

        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''

    } else{
        titulo.innerHTML = "Erro na gravação"
        titulo.className = 'modal-title text-danger'
        corpo.innerHTML = "Existem campos obrigatórios que não foram preenchidos"
        botao.innerHTML = "Voltar e corrigir"
        botao.className = "btn btn-danger"
        $('#modalRegistraDispesa').modal('show')
    }
}

function carregaDespesas() {

    let despesas = []
    despesas = bd.recuperaRegistros()

    let listaDespesas = document.getElementById('listaDespesas')

    despesas.forEach(function(d){
      let linha = listaDespesas.insertRow()

      linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
      linha.insertCell(1).innerHTML = d.tipo
      linha.insertCell(2).innerHTML = d.descricao
      linha.insertCell(3).innerHTML = `R$${d.valor}`

      let btn = document.createElement('button')
      btn.className = 'btn btn-danger'
      btn.innerHTML = '<span style="font-weight: 900;">X</span>'
      btn.id = d.id
      btn.onclick = function(){
        bd.remover(btn.id)

        window.location.reload()
      }
      
      linha.insertCell(4).append(btn)
    })
}

function pesquisaDespesa(){

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let consulta = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    let despesas = bd.pesquisar(consulta)

    let listaDespesas = document.getElementById('listaDespesas')
    listaDespesas.innerHTML = ''

    despesas.forEach(function(d){
      let linha = listaDespesas.insertRow()

      linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
      linha.insertCell(1).innerHTML = d.tipo
      linha.insertCell(2).innerHTML = d.descricao
      linha.insertCell(3).innerHTML = `R$${d.valor}`

      let btn = document.createElement('button')
      btn.className = 'btn btn-danger'
      btn.innerHTML = '<span style="font-weight: 900;">X</span>'
      btn.id = d.id
      btn.onclick = function(){
        bd.remover(btn.id)

        window.location.reload()
      }

      linha.insertCell(4).append(btn)
    })
}
