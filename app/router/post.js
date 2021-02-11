const router = require("express").Router();
const { addPost, getAllPosts } = require('../controllers/post')

console.log('je passe dans le router post')

// Récupérer tous les articles
router.get("/post", getAllPosts)

// Créer un article
router.post("/post", addPost);

module.exports = router;