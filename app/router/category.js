const router = require("express").Router();
const { addCategory, getAllCategories, getByCategoryId } = require("../controllers/category");

// Ajouter une catégories
router.post('/category', addCategory);
// Récupérer toutes les categories
router.get('/category', getAllCategories);
// Récupérer les posts par catégories
router.get('/category/:tag', getByCategoryId);

module.exports = router;