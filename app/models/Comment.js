const { model } = require("mongoose");
const commentSchema = require("../schemas/comment");

class Comment {
  getMsg() {
    return this.msg;
  }
}

commentSchema.loadClass(Comment);
module.exports = model("Comment", commentSchema);