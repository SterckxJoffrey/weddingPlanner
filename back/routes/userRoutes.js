const express = require('express');
const router = express.Router();

const { register } = require('../controllers/auth');
const { login } = require('../controllers/loginController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;