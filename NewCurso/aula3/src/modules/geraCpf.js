import {CPF} from './validaCpfClass'

export class geraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatado(cpf){
        return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand()
        console.log(cpfSemDigito)
        let cpf = new CPF(cpfSemDigito)
        let result = cpf.validaCPF(cpfSemDigito)
        return this.formatado(result)
    }
}