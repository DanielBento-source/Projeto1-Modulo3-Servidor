const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const ROUTES = require('express').Router();
const CONTROLLER_PALETAS = require('../controllers/paleta.controller');
const CONTROLLER_CARRINHO = require('../controllers/carrinho.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');
const {
  validObjectBodyCarrinho,
} = require('../middlewares/carrinho.middleware');

// rotas swagger
ROUTES.use('/api-docs', swaggerUi.serve);
ROUTES.get('/api-docs', swaggerUi.setup(swaggerDocument));

// rotas padrão

ROUTES.get('/all-paletas', CONTROLLER_PALETAS.findAllPaletasController);
ROUTES.get(
  '/chosen-paleta/:id',
  validId,
  CONTROLLER_PALETAS.findByIdPaletaController,
);

ROUTES.post(
  '/create-paleta',
  validObjectBody,
  CONTROLLER_PALETAS.createPaletaController,
);
ROUTES.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  CONTROLLER_PALETAS.updatePaletaController,
);
ROUTES.delete(
  '/delete-paleta/:id',
  validId,
  CONTROLLER_PALETAS.deletePaletaController,
);

// rotas do carrinho de compras

ROUTES.get('/all-carrinho', CONTROLLER_CARRINHO.findAllCarrinhoController);
ROUTES.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  CONTROLLER_CARRINHO.createManyItemsCarrinhoController,
);
ROUTES.delete(
  '/delete-carrinho',
  CONTROLLER_CARRINHO.deleteAllItemsCarrinhoController,
);

module.exports = ROUTES;
