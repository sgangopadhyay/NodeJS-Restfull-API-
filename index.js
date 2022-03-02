// i will run the server over here
// i will the routes.js file here

const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/delta";

const app = express();

mongoose.connect(url, {
  useNewUrlParser: true,
});

const con = mongoose.connection;

con.on("open", () => {
  console.log("MongoDB Started !");
});

app.use(express.json());

const alienRouter = require("./routes/routes");
app.use("/api", alienRouter);

app.listen(3000, () => {
  console.log("Server Started at Port 3000");
});
