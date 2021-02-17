require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const server = express();
const mongoDB = require("./app/config/database");
const { userRouter, postRouter, categoryRouter, commentRouter } = require("./app/router");
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors('*'));

//Router
server.use(userRouter);
server.use(postRouter);
server.use(categoryRouter);
server.use(commentRouter);

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

// Express
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`server ok sur le port ${PORT}`);
});
