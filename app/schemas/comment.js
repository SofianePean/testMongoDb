const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  msg: {
    type: String,
    required: true,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = commentSchema;
