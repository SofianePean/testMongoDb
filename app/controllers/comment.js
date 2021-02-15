const { Comment, Post } = require("../models");

const commentController = {
  addComment: async (req, res, next) => {
    const postId = req.params.id;
    try {
      const comment = new Comment(req.body);
      const post = await Post.findByIdAndUpdate(postId, {
        $push: { comment: comment },
      });
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
  findOneCommentById: async (req, res, next) => {
    try {
      const commentId = req.params.commentId;
      console.log("comment ID", commentId);
      // Je populate User mais je ne garde que son name
      const comment = await Comment.findById(commentId).populate("user", "name");
      res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = commentController;
