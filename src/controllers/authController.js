const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signUp = async (req, res) => {
    try {
      const { nome, email, senha, telefones } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ mensagem: 'E-mail já existente' });
      }

       // Criptografar senha
    const hashedPassword = await bcrypt.hash(senha, 10);
