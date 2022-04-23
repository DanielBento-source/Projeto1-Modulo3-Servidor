const paletaService = require('../services/paleta.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const ALL_PALETAS = await paletaService.findAllPaletasService();

  if (ALL_PALETAS.length == 0) {
    return res.status(404).send({ message: 'Nenhuma paleta foi cadastrada' });
  }

  res.send(ALL_PALETAS);
};

const findByIdPaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(ID_PARAM)) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  const CHOSEN_PALETA = await paletaService.findByIdPaletaService(ID_PARAM);
  if (!CHOSEN_PALETA) {
    return res.status(404).send({ message: 'Paleta nao encontrada' });
  }
  res.send(CHOSEN_PALETA);
};

const createPaletaController = async (req, res) => {
  const PALETA = req.body;
  if (
    !PALETA ||
    !PALETA.sabor ||
    !PALETA.descricao ||
    !PALETA.foto ||
    !PALETA.preco
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }
  const NEW_PALETA = await paletaService.createPaletaService(PALETA);
  res.status(201).send(NEW_PALETA);
};

const updatePaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(ID_PARAM)) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  const EDIT_PALETA = req.body;

  if (
    !EDIT_PALETA ||
    !EDIT_PALETA.sabor ||
    !EDIT_PALETA.descricao ||
    !EDIT_PALETA.foto ||
    !EDIT_PALETA.preco
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }
  const UPDATED_PALETA = await paletaService.updatePaletaService(
    ID_PARAM,
    EDIT_PALETA,
  );
  res.send(UPDATED_PALETA);
};

const deletePaletaController = async (req, res) => {
  const ID_PARAM = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(ID_PARAM)) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  await paletaService.deletePaletaService(ID_PARAM);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
