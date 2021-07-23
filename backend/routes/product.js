const router = require('express').Router();
const productController = require("../controllers/product");
const { auth, admin } = require("../middleware/auth");

// Get, Post Products
router.get("/", productController.getProducts)
router.post('/', auth, admin, productController.createProduct);

// Get, Put, Delete Products By Id
router.get('/:id', productController.getProductById)
router.put('/:id', auth, admin, productController.updateProduct);
router.delete('/:id', auth, admin, productController.deleteProduct);


module.exports = router;

