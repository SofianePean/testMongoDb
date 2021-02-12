const { model } = require("mongoose");
const categorySchema = require("../schemas/category");

class Category {
  getTitle() {
    return this.title;
  }
}

categorySchema.loadClass(Category);
module.exports = model("Category", categorySchema);