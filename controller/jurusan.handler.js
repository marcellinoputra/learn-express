const repo = require('../database/repo/jurusan.repository');
const { validationResult } = require('express-validator');

function jurusanGETController(req, res) {
  repo.jurusanGET(function (err, result) {
    if (err) {
      res.status(400).send({
        message: 'Something Went Wrong',
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: 'Successfully GET Data Jurusan',
      });
    }
  });
}

function jurusanPOSTController(req, res) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).send({
      message: error.array(),
    });
  } else {
    repo.jurusanPOST(req.body, function (err, result) {
      if (err) {
        return res.status(400).send({
          message: 'Something Went Wrong',
        });
      } else {
        return res.status(201).send({
          status: 201,
          message: 'Successfully Add Jurusan',
        });
      }
    });
  }
}

module.exports = {
  jurusanGETController,
  jurusanPOSTController,
};
