import { suggestionModel } from "../models/suggestion-model";
import database from "./database";

const suggestionsDAO = {
  insert: (suggestion: suggestionModel, callback: (id?: number) => void) => {
    const sql =
      "INSERT INTO sugestoes (telefone_FK, assuntoSelecionado, sugestao) VALUES (?, ?, ?)";
    const params = [
      suggestion.telefone_fk,
      suggestion.assuntoSelecionado,
      suggestion.sugestao,
    ];
    database.run(sql, params, function (_err: any) {
      callback(this?.lastID);
    });
  },

  getAll: (telefone_FK: string, callback: (user?: suggestionModel) => void) => {
    const sql = "SELECT * FROM sugestoes WHERE telefone_FK = ?";
    const params = [telefone_FK];
    database.get(sql, params, (_err: any, row: suggestionModel) =>
      callback(row)
    );
  },

  delete: (id: number, callback: (notFound: boolean) => void) => {
    const sql = "DELETE FROM sugestoes WHERE id = ?";
    const params = [id];
    database.run(sql, params, function (_err: any) {
      callback(this.changes === 0);
    });
  },
};
export default suggestionsDAO;
