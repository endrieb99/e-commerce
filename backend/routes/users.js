const router = require('express').Router();
const userControllers = require("../controllers/users");
const { auth, admin } = require("../middleware/auth");

// Create, Login, Delete User
router.get('/profile', auth, userControllers.getUserProfile)
router.post('/', userControllers.register);
router.post('/login', userControllers.login);
router.delete('/:id', userControllers.deleteUser);

module.exports = router;

