const { Comment } = require("../models");

const commentController = {
  addComment: async (req, res, next) => {
    try {
      const comment = new Comment(req.body);
      const result = await comment.save();
      return res.status(200).json({ msg: "Message créée", result });
    } catch (error) {
      next(error);
    }
  },
  findAllComments: async (req, res, next) => {
    try {
      const comments = await Comment.find().populate("user");
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = commentController;
