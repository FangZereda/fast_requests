const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Pagamento OK");
});

app.post("/pagar", (req, res) => {
  res.json({ status: "Pagamento aprovado" });
});

app.listen(3001, () => {
  console.log("Serviço de Pagamentos rodando na porta 3001");
});
