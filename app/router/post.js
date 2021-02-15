const router = require("express").Router();
const { addPost, getAllPosts, getOnePostById } = require("../controllers/post");

// Récupérer tous les articles
router.get("/post", getAllPosts);
// Créer un article
router.post("/post", addPost);
// Récupérer un poste par son ID
router.get("/post/:postID", getOnePostById)

module.exports = router;
