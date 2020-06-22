const {Router} = require('express')
const routes = Router()

routes.get("/",(req, res)=>{
  res.json({message: "Bem vindo!"})
})

module.exports = routes