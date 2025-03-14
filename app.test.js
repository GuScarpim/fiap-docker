const request = require("supertest")
const app = require("./app");

describe("Testando API", () => {
  it("Deve retornar uma mensagem 'API rodando'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Api rodando!!!")
  })
})