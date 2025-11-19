
import express from "express";
import cors from "cors";
import { conexao } from "./conexao.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.send("API Node.js funcionando!");
});

// Listar usuários
app.get("/usuarios", async (req, res) => {
  const [rows] = await conexao.query("SELECT * FROM funcionarios");
  res.json(rows);
});

// Criar usuário
app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;

  await conexao.query("INSERT INTO funcionarios(nome, email) VALUES (?, ?)", [
    nome,
    email,
  ]);

  res.json({ message: "Funcionário criado com sucesso!" });
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));