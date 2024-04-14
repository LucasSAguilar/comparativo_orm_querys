import mysql from "mysql2/promise";

const getConfig = () => ({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "login",
});

const user = "Gabi";
const password = "1234"

const criarUsuario = async (user, password) => {
    const connection = await mysql.createConnection(getConfig());
  
    try {
      await connection.query(
        `INSERT INTO usuarios (usuario, senha) VALUES (?, ?)`,
        [user, password]
      );
    } catch (err) {
      throw err;
    } finally {
      await connection.end();
    }
  };

  criarUsuario(user, password)