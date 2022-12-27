const connectDatabase = require('../db');

//Get Method
function mahasiswaGET(callback) {
  connectDatabase.connection.query(
    'SELECT * FROM mahasiswa',
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
function mahasiswaPOST(body, callback) {
  connectDatabase.connection.query(
    `INSERT INTO mahasiswa(nama, nim, jurusan) VALUES ('${body.nama}', '${body.nim}', '${body.jurusan}')`,
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
