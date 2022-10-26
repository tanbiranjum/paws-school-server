const express = require("express");
const cors = require("cors");
const app = express();
const categories = require("./public/categories.json");
const courses = require("./public/courses.json");

app.use(cors());

app.get("/category", (req, res, next) => {
  res.send(categories);
});

app.get("/category/:id", (req, res, next) => {
  const id = req.params.id * 1;
  const category = categories.filter((course) => course.id === id);
  res.send(category);
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res, next) => {
  const id = req.params.id * 1;
  const course = courses.filter((course) => course.id === id);
  res.send(course);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Paws School api is running on ${PORT} PORT`);
});
