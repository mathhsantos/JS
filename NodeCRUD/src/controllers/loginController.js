const loginService = require('../services/loginService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]}

        let logins = await loginService.buscarTodos()

        for(let i in logins){
            json.result.push({
                id: logins[i].id,
                email: logins[i].email,
                senha: logins[i].senha
            })
        }

        res.json(json)
    }
}