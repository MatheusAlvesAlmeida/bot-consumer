import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const SQL_USER_CREATE = `
    CREATE TABLE usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        telefone TEXT,
        nome TEXT,
        chat_id TEXT,
        cidade TEXT
    )`;

const SQL_SUGGESTIONS_CREATE = `
    CREATE TABLE sugestoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        telefone_FK TEXT,
        assuntoSelecionado INTEGER,
        sugestao TEXT,
        FOREIGN KEY (telefone_FK) REFERENCES usuario (telefone) 
    )`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Base de dados conectada com sucesso.");
    database.run(SQL_USER_CREATE, (err: any) => {
      if (err) {
      } else {
        console.log("Tabela usuário criada com sucesso.");
      }
    });

    database.run(SQL_SUGGESTIONS_CREATE, (err: any) => {
      if (err) {
      } else {
        console.log("Tabela sugestões criada com sucesso.");
      }
    });
  }
});

export default database;
