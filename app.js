const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Api rodando!!!"})
})
app.get("/new", (req, res) => {
  res.send({ message: "Roa New"})
})

module.exports = app;
