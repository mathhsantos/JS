import {geraCPF} from './modules/geraCpf.js'
import '../public/assets/css/style.css'

function global(){
    const gera = new geraCPF()
    const cpfGerado = document.querySelector('.resultado')
    const $button = document.createElement('button')
    $button.innerHTML = 'Gerar CPF'
    $button.className = 'btn btn-primary mt-4'
    $button.onclick = function(){
        window.location.reload()
    }

    cpfGerado.insertAdjacentElement('afterend', $button)

    cpfGerado.innerHTML = gera.geraNovoCpf()

}global()