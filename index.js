const express = require("express");
const cors = require("cors");
const app = express();
const catagories = require("./public/categories.json");
const courses = require("./public/courses.json");

app.use(cors());

app.get("/categories", (req, res, next) => {
  res.send(catagories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const courses = courses.filter((course) => course.category_id === id);
  res.send(courses);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Paws School api is running on ${PORT} PORT`);
});
