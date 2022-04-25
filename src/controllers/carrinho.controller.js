const CARRINHO_SERVICE = require('../services/carrinho.service');

const findAllCarrinhoController = async (req, res) => {
  const ALL_CARRINHOS = await CARRINHO_SERVICE.findAllCarrinhosService();
  if (!ALL_CARRINHOS) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(ALL_CARRINHOS);
};

const createManyItemsCarrinhoController = async (req, res) => {
  const CARRINHO = req.body;
  const NEW_CARRINHO =
    CARRINHO_SERVICE.createManyItemsCarrinhoService(CARRINHO);
  res.status(201).send(NEW_CARRINHO);
};

const deleteAllItemsCarrinhoController = async (req, res) => {
  await CARRINHO_SERVICE.deleteAllItemsCarrinhoService();
  res.send({ message: 'Carrinho finalizado com sucesso!' });
};

module.exports = {
  findAllCarrinhoController,
  createManyItemsCarrinhoController,
  deleteAllItemsCarrinhoController,
};
