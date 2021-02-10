const { response } = require("express");
const Post = require("../models/Post.model");

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
      try {
          const posts = await Post.find();
          res.status(200).json(posts);
      } catch (e) {
          console.log('error getAllPosts', e)
      }
  }
};

module.exports = postController;