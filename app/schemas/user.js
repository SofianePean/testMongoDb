const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  age: {
    type: Number,
  },
  role: {
      type: String,
      default: "user"
  },
});

module.exports = userSchema;
