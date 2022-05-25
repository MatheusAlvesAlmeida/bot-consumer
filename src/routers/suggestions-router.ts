import express from "express";
import { suggestionModel } from "../models/suggestion-model";
import suggestionsDAO from "../dao/suggestionsDAO";

const suggestionsRouter = express.Router();

suggestionsRouter.post("/sugestoes", (req, res) => {
  const item: suggestionModel = req.body;
  suggestionsDAO.insert(item, (id) => {
    if (id) {
      res.status(201).location(`/sugestoes/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
});

suggestionsRouter.get(
  "/sugestoes/:telefone",
  (
    req: { params: { telefone_FK: string | number } },
    res: { json: (arg0: suggestionModel | undefined) => void }
  ) => {
    const telefone: string = +req.params.telefone_FK;
    suggestionsDAO.getAll(telefone, (itens) => res.json(itens));
  }
);

suggestionsRouter.delete("/sugestoes/:id", (req, res) => {
  const id: number = +req.params.id;
  suggestionsDAO.delete(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

export default suggestionsRouter;
