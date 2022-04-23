const PALETA_SERVICE = require('../services/paleta.service');
const mongoose = require('mongoose');
const findAllPaletasController = async (req, res) => {
  const ALL_PALETAS = await PALETA_SERVICE.findAllPaletasService();
  if (ALL_PALETAS.length == 0) {
    return res.status(404).send({ message: 'Nenhuma paleta foi cadastrada' });
  }
  res.send(ALL_PALETAS);
};

const findByIdPaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;
  const CHOSEN_PALETA = await PALETA_SERVICE.findByIdPaletaService(ID_PARAM);
  if (!CHOSEN_PALETA) {
    return res.status(404).send({ message: 'Paleta nao encontrada' });
  }
  res.send(CHOSEN_PALETA);
};

const createPaletaController = async (req, res) => {
  const PALETA = req.body;
  const NEW_PALETA = await PALETA_SERVICE.createPaletaService(PALETA);
  res.status(201).send(NEW_PALETA);
};

const updatePaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;
  const EDIT_PALETA = req.body;
  const UPDATED_PALETA = await PALETA_SERVICE.updatePaletaService(
    ID_PARAM,
    EDIT_PALETA,
  );
  res.send(UPDATED_PALETA);
};

const deletePaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;
  await PALETA_SERVICE.deletePaletaService(ID_PARAM);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
