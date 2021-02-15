const { Post, Category } = require("../models");

const postController = {
  addPost: async (req, res, next) => {
    try {
      const getCategoryName = req.body.category;
      const post = new Post(req.body);
      const result = await post.save();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  getAllPosts: async (req, res, next) => {
    try {
      const posts = await Post.find()
        .populate("category")
      if (posts.length === 0) {
        return res.status(200).json({ msg: "Il n'y a pas encore d'articles" });
      }
      res.status(200).json(posts);
    } catch (e) {
      next(error);
    }
  },
  getOnePostById: async (req, res, next) => {
    try {
      const postID = req.params.postID;
      const post = await Post.findById(postID)
        .populate("category")
        .populate("comment", ["msg", "date", "user"])
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = postController;
