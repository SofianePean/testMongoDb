require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const mongoDB = require("./app/config/database");
const { userRouter, postRouter, categoryRouter } = require("./app/router");
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Router
server.use(userRouter);
server.use(postRouter);
server.use(categoryRouter);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

// Express
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`server ok sur le port ${PORT}`);
});
