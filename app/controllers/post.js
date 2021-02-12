const { Post, Category } = require("../models");

const postController = {
  addPost: async (req, res) => {
    try {
      const getCategoryName = req.body.category;
      const post = new Post(req.body);
      const result = await post.save();
      res.status(200).json(result);
    } catch (e) {
      console.log(e);
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate("category");
      if (posts.length === 0) {
        return res.status(200).json({ msg: "Il n'y a pas encore d'articles" });
      }
      res.status(200).json(posts);
    } catch (e) {
      console.log("error getAllPosts", e);
    }
  },
};

module.exports = postController;
