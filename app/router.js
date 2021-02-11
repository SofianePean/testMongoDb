const router = require('express').Router();

// Import des controllers
const { createUser, getOneUser } = require('./controllers/userController')
const { addPost, getAllPosts } = require('./controllers/postController')

/* Les routes GET */

// Récupérer tous les articles
router.get('/post', getAllPosts)
router.get('/', (req, res) => {
    res.send('Bonjour depuis la page home !')
})


/* Les routes POST */


// Créer un utilisateur
router.post('/user', createUser)
// Trouver un utilisateur pas son email
router.post('/login', getOneUser)
// Créer un article
router.post('/post', addPost)


module.exports = router;