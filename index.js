const express = require("express");
const cors = require("cors");
const app = express();
const catagories = require("./public/categories.json");
const courses = require("./public/courses.json");

app.use(cors());


app.get('/', (req, res, next)=> {

})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Paws School api is running on ${PORT} PORT`);
});
