function global() {

    const cadastros = []
    const nome = document.querySelector('#nome')
    const sobrenome = document.querySelector('#sobrenome')
    const cpf = document.querySelector('#cpf')
    const usuario = document.querySelector('#usuario')
    const senha = document.querySelector('#senha')
    const confirmSenha = document.querySelector('#confirmSenha')
    const divs = document.getElementsByClassName('invalid-feedback')
    const enviar = document.querySelector('#enviar')

    class Usuario {
        constructor(nome, sobrenome, cpf, usuario, senha, confirmSenha) {
            this.nome = nome
            this.sobrenome = sobrenome
            this.cpf = cpf
            this.usuario = usuario
            this.senha = senha
            this.confirmSenha = confirmSenha
        }

        validarDados() {
            for (let valor in this) {
                if (this[valor] === '' || this[valor] === undefined || this[valor] === null) {
                    return false
                }
            }

            if(this.confirmSenha !== this.senha){
                return false
            }

            return true
        }
        
    }

    class CPF {
        constructor(cpf) {
            this.cpf = cpf.replace(/\D+/g, '')
        }
    
        validaCPF() {
            let digito1 = String(this.digito(9))
            let digito2 = String(this.digito(10))
            let digitos = this.cpf.slice(0, 9) + digito1 + digito2
    
            if (this.cpf === digitos) {
                return true
            } else {
                return false
            }
        }
    
        digito(num) {
            let cpfAtual = this.cpf
            let cpfArray = Array.from(cpfAtual.slice(0, num))
    
            let soma = cpfArray.reduce((contador, valor, indice) => {
                contador += (Number(((cpfArray.length + 1) - indice)) * Number(valor))
                return contador
            }, 0)
    
            let conta = 11 - (soma % 11)
            return conta > 9 ? '0' : conta
        }
    }

    enviar.addEventListener('click', function (event) {

        console.log(this.usuario === /[\w]+/)

        let criaPessoa = new Usuario(
            nome.value,
            sobrenome.value,
            cpf.value,
            usuario.value,
            senha.value,
            confirmSenha.value
        )

        let cpf1 = new CPF(cpf.value)

        if (criaPessoa.validarDados() && cpf1.validaCPF()) {
            cadastros.push(criaPessoa)
            console.log(cadastros)
            nome.className = 'form-control is-valid'
            sobrenome.className = 'form-control is-valid'
            cpf.className = 'form-control is-valid'
            usuario.className = 'form-control is-valid'
            senha.className = 'form-control is-valid'
            confirmSenha.className = 'form-control is-valid'
            $('#modalExemplo').modal('show')

        } else {

            for (let i of divs) {
                i.innerHTML = 'É necessario preencher todos os campos'
            }

            if(criaPessoa.nome === ''){
                nome.className = 'form-control is-invalid'
            }else{
                nome.className = 'form-control is-valid'
            }

            if(criaPessoa.sobrenome === ''){
                sobrenome.className = 'form-control is-invalid'
            }else{
                sobrenome.className = 'form-control is-valid'
            }

            if(criaPessoa.cpf === '' || cpf1.validaCPF() === false){
                cpf.className = 'form-control is-invalid'
                divs[2].innerHTML = 'CPF invalido'
            }else{
                cpf.className = 'form-control is-valid'
            }

            if(criaPessoa.usuario === '' || criaPessoa.usuario !== (/[\w]+/)){
                usuario.className = 'form-control is-invalid'
                divs[3].innerHTML = 'Somente caracteres alfanumeros'
            }else{
                usuario.className = 'form-control is-valid'
            }

            if(criaPessoa.senha === '' || criaPessoa.senha.length < 3 || criaPessoa.senha.length > 12){
                senha.className = 'form-control is-invalid'
                divs[4].innerHTML = 'A senha deve ter no minimo 3 caracteres e não pode passar de 12 caracteres'
            }else{
                senha.className = 'form-control is-valid'
            }

            if(criaPessoa.confirmSenha === '' || criaPessoa.confirmSenha !== criaPessoa.senha){
                confirmSenha.className = 'form-control is-invalid'
                divs[5].innerHTML = 'Senhas diferentes'
            }else{
                confirmSenha.className = 'form-control is-valid'
            }
        }
    })

} global()
