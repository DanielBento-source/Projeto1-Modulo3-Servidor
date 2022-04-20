const Paletas = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const findByIdPaletaService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
  return paleta;
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
