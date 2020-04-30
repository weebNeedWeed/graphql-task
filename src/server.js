const express = require("express");
const cors = require("cors");
const grapqlMiddleware = require("./graphqlMiddleware");

const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin@localhost:27017/tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

app.use("/", grapqlMiddleware);

const port = process.env.PORT || 80;

const server = app.listen(port, () => {
  const { port } = server.address();

  console.log("app is listening on port %d", port);
});
