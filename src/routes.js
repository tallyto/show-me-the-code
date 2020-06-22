const {Router} = require('express')
const routes = Router()
const {calculaTarifaPage} = require('./app/controllers/CalculaTarifaController')

routes.get("/",(req, res)=>{
  res.json({message: "Bem vindo!"})
})

routes.post('/calcula-tarifa', calculaTarifaPage)

module.exports = routes