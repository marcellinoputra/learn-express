const repo = require('../database/repo/pelajaran.repository');
const { validationResult } = require('express-validator');

function pelajaranGETController(req, res) {
  repo.pelajaranGET(function (err, result) {
    if (err) {
      res.status(400).send({
        message: 'Something Went Wrong',
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: 'Successfully GET Data Pelajaran',
      });
    }
  });
}

function pelajaranPOSTController(req, res) {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).send({
      message: error.array(),
    });
  } else {
    repo.pelajaranPOST(req.body, function (err, result) {
      if (err) {
        return res.status(400).send({
          message: 'Something Went Wrong',
        });
      } else {
        return res.status(201).send({
          status: 201,
          message: 'Successfully Add Pelajaran',
        });
      }
    });
  }
}

module.exports = {
  pelajaranGETController,
  pelajaranPOSTController,
};
