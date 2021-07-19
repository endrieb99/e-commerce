const router = require('express').Router();
const userControllers = require("../controllers/users");

// Register
router.post('/register', userControllers.register);

// Login
router.post('/login', userControllers.login);

// Delete
router.delete('/delete', userControllers.deleteUser);

module.exports = router;

