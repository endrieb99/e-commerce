const router = require('express').Router();
const userControllers = require("../controllers/users");

// Create, Login, Delete User
router.get('/profile', )
router.post('/', userControllers.register);
router.post('/login', userControllers.login);
router.delete('/:id', userControllers.deleteUser);

module.exports = router;

