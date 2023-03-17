class CPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '')
        this.validaCPF()
    }

    validaCPF() {
        let digito1 = String(this.digito(9))
        let digito2 = String(this.digito(10))
        let digitos = this.cpf.slice(0, 9) + digito1 + digito2

        if (this.cpf === digitos) {
            console.log('CPF totalmente válido')
        } else {
            console.log('CPF invalido!!!')
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


let cpf1 = new CPF('490.179.148-66')



