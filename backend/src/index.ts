import express from "express";
import cors from "cors";
import usersRouter from "./routers/users-router";
import suggestionsRouter from "./routers/suggestions-router";

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Bem-vindo!");
});
app.use(
  cors({
    origin: ["http://localhost:4200"],
  })
);
app.use("/api", usersRouter);
app.use("/api", suggestionsRouter);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
