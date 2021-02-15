const router = require("express").Router();
const {
  addComment,
  findAllComments,
  findOneCommentById,
} = require("../controllers/comment");

// Ajouter un commentaire
router.post("/comment/:id", addComment);
// Récupérer tous les commentaires
router.get("/comment", findAllComments);
// Récupérer un commentaire par son ID
router.get("/comment/:commentId", findOneCommentById);

module.exports = router;
