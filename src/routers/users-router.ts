import express from "express";
import { userModel } from "../models/user-model";
import usersDAO from "../dao/userDAO";

const usersRouter = express.Router();

usersRouter.post("/usuario", (req, res) => {
  const item: userModel = req.body;
  usersDAO.insert(item, (id) => {
    if (id) {
      res.status(201).location(`/usuario/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
});

usersRouter.get("/usuario", (req, res) => {
  usersDAO.getAll((itens) => res.json(itens));
});

usersRouter.delete("/usuario/:telefone", (req, res) => {
  const telefone: string = req.params.telefone;
  usersDAO.delete(telefone, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

usersRouter.get("/usuario/:telefone", (req, res) => {
  const telefone: string = req.params.telefone;
  usersDAO.get(telefone, (item) => {
    if (item) {
      res.json(item);
    } else {
      res.status(404).send();
    }
  });
});

export default usersRouter;
