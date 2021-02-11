const router = require("express").Router();
const { createUser, getOneUser } = require("../controllers/user");

console.log('je passe dans le router user')
// Créer un utilisateur
router.post('/user', createUser);
// Trouver un utilisateur pas son email
router.post('/login', getOneUser)

module.exports = router;