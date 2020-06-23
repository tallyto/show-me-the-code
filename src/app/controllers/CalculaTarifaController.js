module.exports = {
  calculaTarifaPage: (req, res) => {
    const { origem, destino, tempo, plano } = req.body;
    const tarifa = calculaTarifa(origem, destino);
    const execende = minutosExcedentes(Number(plano), Number(tempo));
    const valorSemPlano = Number(tempo) * tarifa;
    const valorComJuros = ((execende * tarifa) / 100) * 10;
    const valorComPlano = valorComJuros + execende * tarifa;

    return res.render("home", {
      valorComPlano: valorComPlano.toFixed(2),
      valorSemPlano: valorSemPlano.toFixed(2),
      plano,
      title: "Telzir",
      calculo: true,
    });
  },
};

function calculaTarifa(origem, destino) {
  let tarifa = 0;
  if (origem === "011" && destino === "016") {
    return (tarifa = 1.9);
  }
  if (origem === "016" && destino === "011") {
    return (tarifa = 2.9);
  }
  if (origem === "011" && destino === "017") {
    return (tarifa = 1.7);
  }
  if (origem === "017" && destino === "011") {
    return (tarifa = 2.7);
  }
  if (origem === "011" && destino === "018") {
    return (tarifa = 0.9);
  }
  if (origem === "018" && destino === "011") {
    return (tarifa = 1.9);
  }

  return tarifa;
}

function minutosExcedentes(plano, tempo) {
  let execende = 0;
  if (plano === 30 && tempo > 30) {
    return (execende = tempo - plano);
  }
  if (plano === 60 && tempo > 60) {
    return (execende = tempo - plano);
  }
  if (plano === 120 && tempo > 120) {
    return (execende = tempo - plano);
  }

  return execende;
}
