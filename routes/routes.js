const mahasiswaController = require('../controller/mahasiswa.handler');
const jurusanController = require('../controller/jurusan.handler');
const { check } = require('express-validator');

function routesApp(app) {
  app.get('/mahasiswa', mahasiswaController.mahasiswaGETController);
  app.post('/create-mahasiswa', mahasiswaController.mahasiswaPOSTcontroller);
  app.get('/jurusan', jurusanController.jurusanGETController);
  app.post(
    '/add-jurusan',
    check('jurusan')
      .isLength({ min: 5 })
      .withMessage('Jurusan Minimal 5 Huruf'),
    jurusanController.jurusanPOSTcontroller
  );
}

module.exports = {
  routesApp,
};
