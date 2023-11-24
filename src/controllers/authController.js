const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signUp = async (req, res) => {
    try {
      const { nome, email, senha, telefones } = req.body;
  
      // Verificar se o e-mail já está cadastrado
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ mensagem: 'E-mail já existente' });
      }