const { model } = require("mongoose");
const postSchema = require("../schemas/post");

class Post {
  getTitle() {
    return this.title;
  }
}

postSchema.loadClass(Post);
module.exports = model("Post", postSchema);