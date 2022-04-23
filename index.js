const EXPRESS = require('express');
const CORS = require('cors');
const ROUTES = require('./src/routes/paleta.route');
const CONNECT_TO_DATA_BASE = require('./src/database/database');

const PORT = 3004;
const APP = EXPRESS();

CONNECT_TO_DATA_BASE();

APP.use(EXPRESS.json());
APP.use(CORS());
APP.use('/paletas', ROUTES);

APP.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT} `);
});
