// API significa Application Programming Interface
// REQUISIÇÕES: POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware, npm i cors

import express from "express";
import cors from "cors";
import { db } from "./connetct.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os edpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta: ${PORT}`);
});
