const mongoose = require('mongoose');

const SCHEMA_PALETA = new mongoose.Schema({
  sabor: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

const PALETAS_DB = mongoose.model('paletas', SCHEMA_PALETA);

module.exports = PALETAS_DB;
