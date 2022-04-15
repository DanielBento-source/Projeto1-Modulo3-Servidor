const paletaService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletaService.findAllPaletasService();
  if (paletas.length == 0) {
    return res.status(404).send({ message: 'Nenhuma paleta foi cadastrada' });
  }
  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  const chosenPaleta = paletaService.findByIdPaletaService(idParam);
  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta nao encontrada' });
  }
  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }
  const newPaleta = paletaService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }
  const updatedPaleta = paletaService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  paletaService.deletePaletaService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
