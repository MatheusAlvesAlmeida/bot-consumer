import sqlite3 from "sqlite3";
import { SQL_USER_CREATE } from "../tables/create-users";
import { SQL_SUGGESTIONS_CREATE } from "../tables/create-suggestions";

const DBSOURCE = "db.sqlite";

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
