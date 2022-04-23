const ROUTE = require('express').Router();
const CONTROLLER_PALETAS = require('../controllers/paleta.controller');

ROUTE.get('/all-paletas', CONTROLLER_PALETAS.findAllPaletasController);
ROUTE.get('/chosen-paleta/:id', CONTROLLER_PALETAS.findByIdPaletaController);

ROUTE.post('/create-paleta', CONTROLLER_PALETAS.createPaletaController);
ROUTE.put('/update-paleta/:id', CONTROLLER_PALETAS.updatePaletaController);
ROUTE.delete('/delete-paleta/:id', CONTROLLER_PALETAS.deletePaletaController);

module.exports = ROUTE;
