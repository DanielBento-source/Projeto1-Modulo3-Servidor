const paletaService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletaService.findAllPaletasService();
  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPaleta = paletaService.findByIdPaletaService(idParam);
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletaService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatePaleta = paletaService.updatePaletaService(idParam, paletaEdit);
  res.send(updatePaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  paletaService.deletePaletaService(idParam);
  res.send({ message: 'paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
