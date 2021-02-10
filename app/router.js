const router = require('express').Router();
const testController = require('./controllers/testController')

// Import des controllers
const postTest = require('./controllers/testController')
const { createUser, getOneUser } = require('./controllers/userController')
const { addPost, getAllPosts } = require('./controllers/postController')

/* Les routes GET */

// Récupérer tous les articles
router.get('/post', getAllPosts)


/* Les routes POST */


// Créer un utilisateur
router.post('/user', createUser)
// Trouver un utilisateur pas son email
router.post('/login', getOneUser)
// Créer un article
router.post('/post', addPost)



module.exports = router;