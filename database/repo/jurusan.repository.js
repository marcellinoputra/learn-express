const connectDatabase = require('../db');

//GET method
function jurusanGET(callback) {
  connectDatabase.connection.query(
    'SELECT * FROM jurusan',
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

//Post Method
function jurusanPOST(body, callback) {
  connectDatabase.connection.query(
    `INSERT INTO jurusan(jurusan) VALUES ('${body.jurusan}')`,
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

module.exports = {
  mahasiswaGET,
  mahasiswaPOST,
};
