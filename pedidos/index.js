const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json());

// app.get("/health", (req, res) => {
//     res.send("OK");
// });

// app.listen(3000, () => {
//     console.log("Pedidos rodando na porta 3000");
// });

//conexão ao servidor SQL
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSOWRD || "teste_unifecaf15",
    database: process.env.DB_NAME || "request_db"
});

db.connect((err) =>{
    if (err){
        console.error("Banco de dados não encontrado", err);
    } else {
        console.log("Conexâo realizada")
    }
});

//health endpoint (kubernets)
app.get ("/health", (req, res) => {
    res.status(200).send("OK");
});

//criar request
app.post("/pedido", (req, res) => {
    const {cliente, produto} = req.body;

    const sql = "INSERT INTO pedidos (cliente,produto) VALUES (?, ?)";
    db.query(sql, [cliente, produto], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err});
        }
        res.json({ mensagem: "Pedido criado corretamente!"})
    });
});

app.listen(3000, () => {
    console.log("Serviço de pedidos rodando na porta 3000");
})