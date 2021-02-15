const router = require("express").Router();
const {
  createUser,
  getOneUser,
  getAllUsers,
  login,
} = require("../controllers/user");

// Créer un utilisateur
router.post("/user", createUser);
// Connexion à un compte
router.post("/login", login);
// Récuperer tous les utilisateur
router.get("/user", getAllUsers);

module.exports = router;
