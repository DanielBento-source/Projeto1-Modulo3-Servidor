const ROUTES = require('express').Router();
const CONTROLLER_PALETAS = require('../controllers/paleta.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

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

module.exports = ROUTES;
