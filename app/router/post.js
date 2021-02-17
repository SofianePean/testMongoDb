const router = require("express").Router();
const {
  addPost,
  getAllPosts,
  getOnePostById,
  getLastArticle,
} = require("../controllers/post");

// Récupérer tous les articles
router.get("/post", getAllPosts);
// Créer un article
router.post("/post", addPost);
// Récupérer un poste par son ID
router.get("/post/:postID", getOnePostById);
// Récupérer le dernier article
router.get("/lastarticle", getLastArticle);

module.exports = router;
