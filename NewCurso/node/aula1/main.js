const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

async function lerArquivo(caminho) {
   const dados = await ler(caminho)
   return dados
}

const dadosArquivo = lerArquivo(caminhoArquivo).then(dados => console.log(dados))

console.log(dadosArquivo)

