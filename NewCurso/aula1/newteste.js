document.addEventListener('click', event => {
    const filtro = event.target

    if (filtro.className === 'link') {
        event.preventDefault()
        carregaPagina(filtro)
    }
})

function carregaPagina(filtro) {
    const href = filtro.getAttribute('href')

    fetch(href).then(response => response.text()).then(html => carregaResultado(html))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

