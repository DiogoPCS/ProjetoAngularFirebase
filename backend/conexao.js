
import mysql from "mysql2/promise";

// Cria pool para melhor desempenho
export const conexao = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "empresa",
});
