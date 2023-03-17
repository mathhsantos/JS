function global(){

    function validaCPF(cpf){
        let cpfLimpo = cpf.replace(/\D+/g, '')
        let cpfArray = Array.from(cpfLimpo.slice(0, 9))
        let cpfMult = []
        let cpfMult2 = []
        let contador1 = 10
        let contador2 = 11
        
        for(let i of cpfArray){
            cpfMult.push(Number(i) * contador1)
            contador1 -= 1
        }

        let soma1 = cpfMult.reduce(function(cont, valor){
            return cont += valor
        }, 0)

        if(11 - (soma1 % 11) > 9){
            cpfArray.push(0)
        }else{
            cpfArray.push((11 - (soma1 % 11)).toString())
        }

        for(let i of cpfArray){
            cpfMult2.push(Number(i) * contador2)
            contador2 -= 1
        }

        let soma2 = cpfMult2.reduce(function(cont, valor){
            return cont += valor
        }, 0)

        if((11 - (soma2 % 11)) > 9){
            cpfArray.push(0)
        }else{
            cpfArray.push((11 - (soma2 % 11)).toString())
        }

        if(cpfArray.join('') === cpfLimpo){
            console.log('CPF validado!!')
        } else{
            console.log('CPF invalido!!')
        }
    }

    validaCPF('249.065.198-65')

}global()



 