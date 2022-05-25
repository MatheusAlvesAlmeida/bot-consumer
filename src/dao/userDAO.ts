import { userModel } from "../models/user-model";
import database from "./database";

const usersDAO = {
  insert: (user: userModel, callback: (id?: number) => void) => {
    const sql =
      "INSERT INTO usuario (telefone, nome, chat_id, cidade) VALUES (?, ?, ?, ?)";
    const params = [user.telefone, user.nome, user.chat_id, user.cidade];
    database.run(sql, params, function (_err: any) {
      callback(this?.lastID);
    });
  },

  getAll: (callback: (users: userModel[]) => void) => {
    const sql = "SELECT * FROM usuario";
    const params: any[] = [];
    database.all(sql, params, (_err: any, rows: userModel[]) => callback(rows));
  },

  get: (telefone: string, callback: (user?: userModel) => void) => {
    const sql = "SELECT * FROM usuario WHERE telefone = ?";
    const params = [telefone];
    database.get(sql, params, (_err: any, row: userModel | undefined) =>
      callback(row)
    );
  },

  delete: (telefone: string, callback: (notFound: boolean) => void) => {
    const sql = "DELETE FROM usuario WHERE telefone = ?";
    const params = [telefone];
    database.run(sql, params, function (_err: any) {
      callback(this.changes === 0);
    });
  },
};
export default usersDAO;
