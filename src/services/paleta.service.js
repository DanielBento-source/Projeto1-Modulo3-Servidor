const paletas = [
  {
    id: 1,
    flavor: 'Açaí com Leite Condensado',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    image: './assets/images/acai-com-leite-condensado.png',
    price: 10.0,
  },
  {
    id: 2,
    flavor: 'Banana com Nutella',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    image: './assets/images/banana-com-nutella.png',
    price: 10.0,
  },
  {
    id: 3,
    flavor: 'Chocolate Belga',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    image: './assets/images/chocolate-belga.png',
    price: 7.0,
  },
  {
    id: 4,
    flavor: 'Limao',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    image: './assets/images/limao.png',
    price: 11.0,
  },
];

const findAllPaletasService = () => {
  return paletas;
};
const findByIdPaletaService = (idParam) => {
  return paletas.find((paleta) => paleta.id === idParam);
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
