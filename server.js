require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const mongoDB = require("./app/config/database");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDb connected')
//     })

mongoDB.on("error", () => console.log("Error connecting to database"));
mongoDB.once("open", () => console.log("Connected to mongo database"));

// Express 
const PORT = process.env.PORT || 3001;

//Router
const router = require('./app/router');
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json())
server.use(router)

server.listen(PORT, () => {
    console.log(`server ok sur le port ${PORT}`);
  });