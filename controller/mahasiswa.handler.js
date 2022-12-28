const repo = require('../database/repo/mahasiswa.repository');
const { validationResult } = require('express-validator');

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
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).send({
      message: error.array(),
    });
  } else {
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
}

function mahasiswaDELETEController(req, res) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).send({
      message: error.array(),
    });
  } else {
    repo.mahasiswaDELETE(req.body, function (err, result) {
      if (err) {
        message: 'ID is not Found';
      } else {
        res.status(200).send({
          status: 200,
          message: 'Successfully Delete Account',
        });
      }
    });
  }
}

module.exports = {
  mahasiswaGETController,
  mahasiswaPOSTcontroller,
  mahasiswaDELETEController,
};
