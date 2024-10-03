const express = require("express");
const TaskModel = require("../src/models/task.model");

const app = express();

app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/tasks/:nome", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`servidor rodando na porta ${process.env.PORT}`)
);
