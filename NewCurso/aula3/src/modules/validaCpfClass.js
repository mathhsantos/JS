export class CPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '')
    }

    validaCPF(num) {
        let digito1 = String(this.digito(num))
        let digito2 = String(this.digito((num+digito1)))
        let digitos = this.cpf.slice(0, 9) + digito1 + digito2

        if (this.cpf+digito1+digito2 === digitos) {
            return digitos
        } else {
            return 'Falha'
        }
    }

    digito(num) {
        let cpfArray = Array.from(num)

        let soma = cpfArray.reduce((contador, valor, indice) => {
            contador += (Number(((cpfArray.length + 1) - indice)) * Number(valor))
            return contador
        }, 0)

        let conta = 11 - (soma % 11)
        return conta > 9 ? '0' : conta
    }
}

console.log('Cheguei aqui')
