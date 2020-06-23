const app = require("../src/app");
const request = require("supertest");
describe("Suite de testes de tarifas", () => {
  it("Deve calcular tarifa do plano FaleMais 30", async () => {
    const data = {
      origem: "011",
      destino: "016",
      tempo: "20",
      plano: "30",
    };
    const response = await request(app).post("/api/calcular-tarifa").send(data);
    const esperado = {
      valorComPlano: "0.00",
      valorSemPlano: "38.00",
    };

    expect(esperado).toEqual(response.body);
  });

  it("Deve calcular tarifa do plano FaleMais 60", async () => {
    const data = {
      origem: "011",
      destino: "017",
      tempo: "80",
      plano: "60",
    };
    const response = await request(app).post("/api/calcular-tarifa").send(data);
    const esperado = {
      valorComPlano: "37.40",
      valorSemPlano: "136.00",
    };

    expect(esperado).toEqual(response.body);
  });

  it("Deve calcular tarifa do plano FaleMais 120", async () => {
    const data = {
      origem: "018",
      destino: "011",
      tempo: "200",
      plano: "120",
    };
    const response = await request(app).post("/api/calcular-tarifa").send(data);
    const esperado = {
      valorComPlano: "167.20",
      valorSemPlano: "380.00",
    };

    expect(esperado).toEqual(response.body);
  });
});
