const { Post, Category, User, Comment } = require("../models");

const postController = {
  addPost: async (req, res, next) => {
    try {
      const { author } = req.body;
      // Ici je test si l'utilisateur a bien un compte
      const user = await User.findOne({ _id: author });
      if (!user) {
        res.status(400).json("Il faut être connecté pour poster un article");
      }
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
        .populate("author", "username");
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
      const post = await Post.find({ _id: postID })
        .populate("category")
        .populate({
          path: "comment",
          populate: {
            path: "user",
            select: "username",
          },
        });
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },
  getLastArticle: async (req, res, next) => {
    try {
      const posts = await Post.find()
        .populate("category")
        .populate("author", "username");
      if (posts.length === 0) {
        return res.status(200).json({ msg: "Il n'y a pas encore d'articles" });
      }
      const lastPost = posts[posts.length - 1]
      const newPost = posts.pop()
      res.status(200).json({lastPost, newPost});
    } catch (e) {
      next(error);
    }
  }
};

module.exports = postController;
