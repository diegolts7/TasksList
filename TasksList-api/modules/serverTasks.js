const express = require("express");
const TaskModel = require("../src/models/task.model");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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
    const nome = req.params.nome;
    const tasksByName = await TaskModel.find({
      text: { $regex: nome, $options: "i" },
    });
    res.status(201).json(tasksByName);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/tasks/checked/:tipo", async (req, res) => {
  try {
    const tipo = req.params.tipo;
    const tasksByTipo = await TaskModel.find({
      checked: tipo === "true" ? true : false,
    });
    res.status(201).json(tasksByTipo);
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
    const id = req.params.id;
    const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    res.status(200).json(deletedTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`servidor rodando na porta ${process.env.PORT}`)
);
