const connectDatabase = require('../db');

function pelajaranGET(callback) {
  connectDatabase.connection.query(
    'SELECT * FROM pelajaran',
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
function pelajaranPOST(body, callback) {
  connectDatabase.connection.query(
    `INSERT INTO pelajaran(pelajaran) VALUES ('${body.pelajaran}')`,
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
  pelajaranGET,
  pelajaranPOST
};
