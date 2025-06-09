import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnection.js";

//configs
const app = express();
app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("server is running in port 8080");
});

app.get("/", (req, res) => {
  res.json({
    message: "This is the root route. WHY ARE YOU HERE, HOW DID YOU FIND THIS",
  });
});

app.get("/peoplenames", async (req, res) => {
  const data = await db.query(`SELECT name FROM people`);
  res.json(data.rows);
});

app.get("/peoplesmelly", async (req, res) => {
  const data = await db.query(`SELECT smelly FROM people`);
  res.json(data.rows);
});

app.post("/addpeople", (req, res) => {
  const { name, gender, smelly } = req.body;

  const insert = db.query(
    "INSERT INTO people (name, gender, smelly) VALUES ($1, $2, $3)",
    [name, gender, smelly]
  );
});
