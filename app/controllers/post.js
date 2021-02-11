const { Post } = require("../models");

const postController = {
  addPost: async (req, res) => {
    try {
      const post = new Post(req.body);
      const result = await post.save();
      res.status(200).json(result);
    } catch (e) {
      console.log(e);
    }
  },
  getAllPosts: async (req, res) => {
    console.log('je passe dans le control')
      try {
          const posts = await Post.find();
          res.status(200).json(posts);
      } catch (e) {
          console.log('error getAllPosts', e)
      }
  }
};

module.exports = postController;