const { Router } = require("express");
const routes = Router();
const {
  calculaTarifaPage,
} = require("./app/controllers/CalculaTarifaController");

routes.get("/", (req, res) => {
  res.render("home", { title: "Telzir" });
});

routes.post("/calcular-tarifa", calculaTarifaPage);

module.exports = routes;
