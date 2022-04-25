const mongoose = require('mongoose');

const validObjectBodyCarrinho = (req, res, next) => {
  const CARRINHO = req.body;
  CARRINHO.forEach((item) => {
    if (!item || !item.paletaId || !item.quantidade) {
      return res.status(400).send({ message: 'Envie todos os campos!' });
    }
  });
  next();
};

module.exports = {
  validObjectBodyCarrinho,
};
