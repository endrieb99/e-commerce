const router = require('express').Router();
const orderControllers = require("../controllers/order");
const { auth, admin } = require("../middleware/auth");

// Get, Post Orders
router.get('/', auth, admin, orderControllers.getOrders);
router.post('/', auth, orderControllers.addOrder);


module.exports = router;

