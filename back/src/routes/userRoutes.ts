const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/User');

//Users routes (sign in and sign up).

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);

module.exports = router;