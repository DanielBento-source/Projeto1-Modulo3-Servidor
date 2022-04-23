const PALETAS_DB = require('../models/Paleta');

const findAllPaletasService = async () => {
  const ALL_PALETAS = await PALETAS_DB.find();
  return ALL_PALETAS;
};

const findByIdPaletaService = async (idParam) => {
  const CHOSEN_PALETA = await PALETAS_DB.findById(idParam);
  return CHOSEN_PALETA;
};

const createPaletaService = async (newPaleta) => {
  const CREATED_PALETA = await PALETAS_DB.create(newPaleta);
  return CREATED_PALETA;
};

const updatePaletaService = async (idParam, EditedPaleta) => {
  const UPDATED_PALETA = await PALETAS_DB.findByIdAndUpdate(
    idParam,
    EditedPaleta,
  );
  return UPDATED_PALETA;
};

const deletePaletaService = async (idParam) => {
  return await PALETAS_DB.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
