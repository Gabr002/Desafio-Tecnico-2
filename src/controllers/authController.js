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

    
    const hashedPassword = await bcrypt.hash(senha, 10);

    const newUser = new User({
        nome,
        email,
        senha: hashedPassword,
        telefones,
      });

    await newUser.save();

    const token = generateToken(newUser);
