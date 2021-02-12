const { Category, Post } = require("../models");

const categoryController = {
  addCategory: async (req, res, next) => {
    try {
      console.log('req body', req.body)
      const category = new Category(req.body);
      const result = await category.save();
      return res.status(200).json({ msg: "Catégorie créée", result });
    } catch (error) {
      next(error);
    }
  },
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await Category.find().populate("posts");
      if (categories.length === 0) {
        return res
          .status(200)
          .json({ msg: "Il n'y a pas encore de catégories" });
      }
      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },
  getByCategory: async (req, res, next) => {
    const tag = req.params.tag
    console.log(tag)
    try {
      const posts = await Category.findOne({name : tag}).populate("posts");
      return res.status(200).json(posts);
    } catch (error) {
      next(error)
    }
  }
};

module.exports = categoryController;
