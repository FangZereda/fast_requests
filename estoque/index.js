const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Estoque OK");
});

app.post("/reservar", (req, res) => {
  res.json({ status: "Produto reservado" });
});

app.listen(3002, () => {
  console.log("Serviço de Estoque rodando na porta 3002");
});
