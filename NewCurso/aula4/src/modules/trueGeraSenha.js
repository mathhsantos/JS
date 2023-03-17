import { geraSenha } from "./geraChar.js";

const $resultado = document.querySelector('.resultado')
const $inputqtd = document.querySelector('#inputqtd')
const $check1 = document.querySelector('#Check1')
const $check2 = document.querySelector('#Check2')
const $check3 = document.querySelector('#Check3')
const $check4 = document.querySelector('#Check4')
const $button = document.querySelector('.btn')


export const ativaTudo = () => {
    $button.addEventListener('click', function (event) {
        if ($check1.checked === false &&
            $check2.checked === false &&
            $check3.checked === false &&
            $check4.checked === false
        ) return $resultado.innerHTML = 'Escolha um campo abaixo!'

        console.log($inputqtd)
        console.log($check1.checked)
        console.log($check2.checked)
        console.log($check3.checked)
        console.log($check4.checked)
        

        return $resultado.innerHTML = gera()
    })
}

function gera(){
    const senha = geraSenha(
        $inputqtd.value,
        $check1.checked,
        $check2.checked,
        $check3.checked,
        $check4.checked
    )

    return senha
}

