const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const port = 3004;
const app = express();

// configurando aplicação para trabalhar com json
app.use(express.json());
app.use(cors());

// definir dados para usar na aplicação

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

app.get('/', (req, res) => {
  res.send('Hello Blue Modulo 3 Fullstack');
});

// getAll lista de todas paletas
app.get('/paletas/all-paletas', (req, res) => {
  res.send(paletas);
});

//getByIds
app.get('/paletas/paleta/:id', (req, res) => {
  const idParam = Number(req.params.id);
  const chosenPaleta = paletas.find((paleta) => paleta.id === idParam);
  res.send(chosenPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} `);
});
