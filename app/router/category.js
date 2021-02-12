const router = require("express").Router();
const { addCategory, getAllCategories, getByCategory } = require("../controllers/category");

// Ajouter une catégories
router.post('/category', addCategory);
// Récupérer toutes les categories
router.get('/category', getAllCategories)
// Récupérer les posts par catégories
router.get('/category/:tag', getByCategory)

module.exports = router;