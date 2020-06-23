const express = require("express");
const routes = require("./routes");
const handlebars = require("express-handlebars");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.engine(".hbs", handlebars({ extname: ".hbs" }));
    this.app.set("view engine", ".hbs");
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
