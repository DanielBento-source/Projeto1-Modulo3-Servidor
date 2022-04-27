require('dotenv').config();
const EXPRESS = require('express');
const CORS = require('cors');
const ROUTES = require('./src/routes/paleta.route');
const CONNECT_TO_DATA_BASE = require('./src/database/database');

const port = process.env.PORT || 3004;
const APP = EXPRESS();

CONNECT_TO_DATA_BASE();

APP.use(EXPRESS.json());
APP.use(CORS());
APP.use('/paletas', ROUTES);

APP.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} `);
});
