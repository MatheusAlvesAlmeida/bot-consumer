export const SQL_SUGGESTIONS_CREATE = `
    CREATE TABLE sugestoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        telefone_FK TEXT,
        assuntoSelecionado INTEGER,
        sugestao TEXT,
        FOREIGN KEY (telefone_FK) REFERENCES usuario (telefone) 
    )`;
