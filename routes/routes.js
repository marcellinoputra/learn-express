const mahasiswaController = require('../controller/mahasiswa.handler');

function routesApp(app) {
  app.get('/mahasiswa', mahasiswaController.mahasiswaGETController);
  app.post('/create-mahasiswa', mahasiswaController.mahasiswaPOSTcontroller);
}

module.exports = {
  routesApp,
};
