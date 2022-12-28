const mahasiswaController = require('../controller/mahasiswa.handler');
const jurusanController = require('../controller/jurusan.handler');
const pelajaranController = require('../controller/pelajaran.handler');
const { check } = require('express-validator');

function routesApp(app) {
  app.get('/mahasiswa', mahasiswaController.mahasiswaGETController);
  app.get('/jurusan', jurusanController.jurusanGETController);
  app.get('/pelajaran', pelajaranController.pelajaranGETController);
  app.post(
    '/create-mahasiswa',
    check('nama')
      .isLength({ min: 10 })
      .withMessage('Nama Minimal 10 Character'),
    check('nim').isLength({ min: 10 }).withMessage('NIM Minimal 10 Character'),
    check('jurusan')
      .isLength({ min: 10 })
      .withMessage('Jurusan Minimal 10 Character'),
    mahasiswaController.mahasiswaPOSTcontroller
  );
  app.post(
    '/add-jurusan',
    check('jurusan')
      .isLength({ min: 5 })
      .withMessage('Jurusan Minimal 5 Character'),
    jurusanController.jurusanPOSTController
  );
  app.post(
    '/add-pelajaran',
    check('pelajaran')
      .isLength({ min: 5 })
      .withMessage('Pelajaran Minimal 5 Character'),
    pelajaranController.pelajaranPOSTController
  );
  // app.delete(
  //   '/delete-mahasiswa/:id',
  //   check('id').isLength({ min: 1 }).withMessage('ID Minimal 1 Character'),
  //   mahasiswaController.mahasiswaDELETEController
  // );
}

module.exports = {
  routesApp,
};
