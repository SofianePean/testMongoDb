const router = require("express").Router();
const { addComment, findAllComments } = require("../controllers/comment");

// Ajouter une catégories
router.post('/comment', addComment);
// Récupérer tous les commentaires
router.get('/comment', findAllComments)

module.exports = router;