import express from "express";
import cors from "cors";

import { getIdData, getQueryData } from "./controllers";
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(express.static("dist"));

app.get("/api/test", (req, res) => {
  res.json({ message: "test" });
});

app.get("/api/items", async (req, res) => {
  const q = req.query.q as string;
  const data = await getQueryData(q);
  res.json(data);
});
app.get("/api/items/:id", async (req, res) => {
  const id = req.params.id as string;
  const data = await getIdData(id);
  res.json(data);
});
app.get("*", (req, res) => {
  const ruta = path.resolve(__dirname, "./../index.html");
  res.sendFile(ruta);
});
app.listen(port, () => {
  console.log(`escuchando en ${port}`);
});
