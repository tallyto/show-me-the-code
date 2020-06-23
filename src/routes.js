const { Router } = require("express");
const routes = Router();
const {
  calculaTarifaPage,
  calculaTarifaAPI,
} = require("./app/controllers/CalculaTarifaController");

routes.get("/", (req, res) => {
  res.render("home", { title: "Show Me The Code" });
});

routes.post("/calcular-tarifa", calculaTarifaPage);
routes.post("/api/calcular-tarifa", calculaTarifaAPI);

module.exports = routes;
