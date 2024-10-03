const express = require("express");

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`servidor rodando na porta ${process.env.PORT}`)
);
