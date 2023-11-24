// Define o modelo do usuário usando o Mongoose, um ODM (Object Data Modeling) para o MongoDB.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
  telefones: [{ numero: String, ddd: String }],
  dataCriacao: { type: Date, default: Date.now },
  dataAtualizacao: { type: Date, default: Date.now },
  ultimoLogin: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
