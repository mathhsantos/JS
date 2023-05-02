const express = require('express')
const router = express.Router()

const loginController = require('./controllers/loginController')

router.get('/logins', loginController.buscarTodos)

module.exports = router