const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signUp = async (req, res) => {
    try{
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
      
        // Responder com sucesso
        res.status(201).json({
            id: newUser._id,
            dataCriacao: newUser.dataCriacao,
            dataAtualizacao: newUser.dataAtualizacao,
            ultimoLogin: newUser.ultimoLogin,
            token,
          });
    }catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const signIn = async (req, res) => {
    try {
      const { email, senha } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
    }

    user.ultimoLogin = new Date();
    await user.save();

    const token = generateToken(user);

    res.json({
        id: user._id,
        dataCriacao: user.dataCriacao,
        dataAtualizacao: user.dataAtualizacao,
        ultimoLogin: user.ultimoLogin,
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  };