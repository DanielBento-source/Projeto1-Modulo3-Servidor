const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com MONGODB, erro ${error}`),
    );
};

module.exports = connectToDatabase;
