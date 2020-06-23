module.exports = {
  calculaTarifaPage: (req, res) => {
    const { origem, destino, tempo, plano } = req.body;
    const tarifa = calculaTarifa(origem, destino);
    const execende = calculaMinutosExcedentes(Number(plano), Number(tempo));
    const valorComJuros = calculaJuros(execende, tarifa);
    const valorComPlano = valorComJuros + execende * tarifa;
    const valorSemPlano = Number(tempo) * tarifa;

    return res.render("home", {
      title: "Show me The Code",
      calculo: true,
      valorComPlano: valorComPlano.toFixed(2),
      valorSemPlano: valorSemPlano.toFixed(2),
      plano,
    });
  },
  calculaTarifaAPI: (req, res) => {
    const { origem, destino, tempo, plano } = req.body;
    const tarifa = calculaTarifa(origem, destino);
    const execende = calculaMinutosExcedentes(Number(plano), Number(tempo));
    const valorSemPlano = Number(tempo) * tarifa;
    const valorComJuros = calculaJuros(execende, tarifa);
    const valorComPlano = valorComJuros + execende * tarifa;

    return res.json({
      valorComPlano: valorComPlano.toFixed(2),
      valorSemPlano: valorSemPlano.toFixed(2),
    });
  },
};

function calculaTarifa(origem, destino) {
  if (origem === "011" && destino === "016") {
    return 1.9;
  }
  if (origem === "016" && destino === "011") {
    return 2.9;
  }
  if (origem === "011" && destino === "017") {
    return 1.7;
  }
  if (origem === "017" && destino === "011") {
    return 2.7;
  }
  if (origem === "011" && destino === "018") {
    return 0.9;
  }
  if (origem === "018" && destino === "011") {
    return 1.9;
  }
  return 0;
}

function calculaMinutosExcedentes(plano, tempo) {
  let exedente = tempo - plano;
  if (plano === 30 && tempo > 30) {
    return exedente;
  }
  if (plano === 60 && tempo > 60) {
    return exedente;
  }
  if (plano === 120 && tempo > 120) {
    return exedente;
  }
  return 0;
}

function calculaJuros(execende, tarifa) {
  return ((execende * tarifa) / 100) * 10;
}
