const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  img: {
    type: String,
  },
  slug: {
    type: String,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

module.exports = postSchema;
