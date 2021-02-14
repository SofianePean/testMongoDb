const router = require("express").Router();
const { createUser, getOneUser, getAllUsers } = require("../controllers/user");

// Créer un utilisateur
router.post("/user", createUser);
// Trouver un utilisateur pas son email
router.post("/login", getOneUser);
// Récuperer tous les utilisateur
router.get("/user", getAllUsers)

module.exports = router;
