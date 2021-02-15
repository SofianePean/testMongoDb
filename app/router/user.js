const router = require("express").Router();
const {
  createUser,
  getOneUser,
  getAllUsers,
  login,
  deleteAccount
} = require("../controllers/user");

// Créer un utilisateur
router.post("/user", createUser);
// Connexion à un compte
router.post("/login", login);
// Récuperer tous les utilisateur
router.get("/user", getAllUsers);
// Supprimer un compte
router.delete("/user/:userId", deleteAccount);

module.exports = router;
