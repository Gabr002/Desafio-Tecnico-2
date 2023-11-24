const express = require('express');
const router = express.Router();
const { signUp, signIn, getUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/signup', signUp);
