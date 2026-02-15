const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/pedido-completo", async (req, res) => {
  try {
    await axios.post("http://pagamentos-service:3001/pagar");
    await axios.post("http://estoque-service:3002/reservar");

    res.json({ status: "Pedido completo processado" });
  } catch (err) {
    res.status(500).json({ erro: "Erro no processamento" });
  }
});

app.listen(8080, () => {
  console.log("Gateway rodando na porta 8080");
});
