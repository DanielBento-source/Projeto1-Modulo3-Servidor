const mongoose = require('mongoose');

const SCHEMA_CARRINHO = new mongoose.Schema({
  paletaId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

const CARRINHO_DB = mongoose.model('carrinho', SCHEMA_CARRINHO);

module.exports = CARRINHO_DB;
