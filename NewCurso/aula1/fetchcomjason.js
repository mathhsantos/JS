fetch('pessoas.json').then(response => response.json()).then(json => carregaElementos(json))

function carregaElementos(json) {
    const $table = document.createElement('table')
    $table.className = 'table table-bordered'

    const $tr1 = document.createElement('tr')
    const $thNome = document.createElement('th')
    $thNome.innerHTML = 'Nome'

    const $thCpf = document.createElement('th')
    $thCpf.innerHTML = 'CPF'

    const $thEmail = document.createElement('th')
    $thEmail.innerHTML = 'Email'

    document.querySelector('.resultado').append($table)

    $table.insertAdjacentElement('beforeend', $tr1)
    
    $tr1.append($thNome, $thCpf, $thEmail)

    for (let pessoa of json) {
        const $tr3 = document.createElement('tr')
        criaColuna(pessoa.nome, pessoa.cpf, pessoa.email, $tr3)
        $table.appendChild($tr3)
    }
}

function criaColuna(nome, cpf, email, $tr3) {
    let $td1 = document.createElement('td')
    let $td2 = document.createElement('td')
    let $td3 = document.createElement('td')
    $td1.innerHTML = nome
    $td2.innerHTML = cpf
    $td3.innerHTML = email
    $tr3.append($td1, $td2, $td3)
}

