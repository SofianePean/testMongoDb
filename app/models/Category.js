const { model } = require("mongoose");
const categorySchema = require("../schemas/category");

class Categoy {
  getTitle() {
    return this.title;
  }
}

categorySchema.loadClass(Categoy);
module.exports = model("Categoy", categorySchema);