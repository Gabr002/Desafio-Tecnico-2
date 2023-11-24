const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

require('dotenv').config();

// Conexão com o banco de dados usando o mongoose
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB!');
});

// Configurar middlewares
app.use(bodyParser.json());

// Configurar rotas
app.use('/api/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({ mensagem: 'Endpoint não encontrado' });
});

// O servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});