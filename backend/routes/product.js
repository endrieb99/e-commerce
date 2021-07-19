const router = require('express').Router();
const productController = require("../controllers/product");

// Get Products
router.get("/", productController.getProducts)

// Get product by id
router.get('/:id', productController.getProductById)

// Create product
router.post('/create', productController.createProduct);

// Delete product 
router.delete('/delete', productController.deleteProduct);

module.exports = router;

