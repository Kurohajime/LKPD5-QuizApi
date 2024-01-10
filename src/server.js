const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const quizRoute = require("./router/quiz-router");
const jobsheetRoute = require("./router/jobsheet-router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Welcome TO Quiz ExspressJs API");
});

app.use("/api/quizzes", quizRoute);
app.use("/api/jobsheet", jobsheetRoute);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
);