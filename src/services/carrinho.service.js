const CARRINHOS = require('../models/Carrinho');

const findAllCarrinhosService = async () => {
  const ALL_CARRINHOS = await CARRINHOS.find();
  return ALL_CARRINHOS;
};

const createManyItemsCarrinhoService = async (newCarrinho) => {
  const CREATED_CARRINHO = await CARRINHOS.insertMany(newCarrinho);
  return CREATED_CARRINHO;
};

const deleteAllItemsCarrinhoService = async () => {
  return await CARRINHOS.deleteMany();
};

module.exports = {
  findAllCarrinhosService,
  createManyItemsCarrinhoService,
  deleteAllItemsCarrinhoService,
};
