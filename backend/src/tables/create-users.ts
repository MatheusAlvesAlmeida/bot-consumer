export const SQL_USER_CREATE = `
CREATE TABLE usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telefone TEXT,
    nome TEXT,
    chat_id TEXT,
    cidade TEXT
)`;
