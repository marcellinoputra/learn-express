const repo = require('../database/repo/mahasiswa.repository');

function mahasiswaGETController(req, res) {
  repo.mahasiswaGET(function (err, result) {
    if (err) {
      res.status(400).send({
        message: 'Something Went Wrong',
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: 'Successfully GET Data Mahasiswa',
      });
    }
  });
}

function mahasiswaPOSTcontroller(req, res) {
  repo.mahasiswaPOST(req.body, function (err, result) {
    if (err) {
      res.status(400).send({
        message: 'Something Went Wrong',
      });
    } else {
      res.status(201).send({
        status: 201,
        message: 'Successfully Create Mahasiswa Account',
      });
    }
  });
}

module.exports = {
  mahasiswaGETController,
  mahasiswaPOSTcontroller,
};
