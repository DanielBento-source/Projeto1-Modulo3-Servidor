const express = require('express');
const port = 3004;
const app = express();

// configurando aplicação para trabalhar com json
app.use(express.json());

// definir dados para usar na aplicação

const acai = [
  {
    id: 1,
    sabor: 'oreo',
    descricao: 'Açai com Leite Condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'nutella',
    descricao: 'Açai com Leite Condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 7.0,
  },
  {
    id: 3,
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: 'https://storage.googleapis.com/domain-images/60b1f285-d77c-444a-b734-1bc1efd2c472/products/gallery_bd17d9a3-cd93-44a9-9b44-f017a1c7a329.jpg',
    preco: 10.0,
  },
];

app.get('/', (req, res) => {
  res.send('Hello Blue Modulo 3 Fullstack');
});

app.get('/acai/find-acai', (req, res) => {
  res.send(acai);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} `);
});
