const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const routes = require('../routes/routes');
const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({ extended: true }));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(cors());

routes.routesApp(app);

app.listen(port);
// //GET ALl Jurusan
// app.get('/jurusan', function (req, res) {
//   connectDatabase.connection.query(
//     'SELECT * FROM `jurusan`',
//     function (err, result) {
//       res.status(200).send({
//         status: 200,
//         data: result,
//         message: 'Successfully GET data',
//       });
//     }
//   );
// });

// //GET all pelajaran
// app.get('/pelajaran', function (req, res) {
//   connectDatabase.connection.query(
//     'SELECT * FROM `pelajaran`',
//     function (err, result) {
//       res.status(200).send({
//         status: 200,
//         data: result,
//         message: 'Successfully GET data',
//       });
//     }
//   );
// });

// //Select data by id
// app.get('/mahasiswa/:id', function (req, res) {
//   let id = req.params.id;

//   connectDatabase.connection.query(
//     `SELECT id, nama, nim, jurusan FROM mahasiswa WHERE id = ${id}`,
//     function (err, result) {
//       if (err) {
//         res.status(400).send({
//           error: true,
//           message: err,
//         });
//       } else {
//         res.status(200).send({
//           error: false,
//           data: result,
//           message: 'Successfully Select',
//         });
//       }
//     }
//   );
// });

// //Post pelajaran
// app.post('/create-pelajaran', function (req, res) {
//   let pelajaran = req.body.pelajaran;

//   console.log(pelajaran);

//   connectDatabase.connection.query(
//     `INSERT INTO pelajaran (pelajaran) VALUES ('${pelajaran}')`,
//     function (err, result) {
//       if (err) {
//         res.status(400).send({
//           error: true,
//           message: err,
//         });
//       } else {
//         res.status(201).send({
//           error: false,
//           message: `Successfully Add Pelajaran`,
//         });
//       }
//     }
//   );
// });

//DELETE Method
// app.delete('/delete-mahasiswa/:id', function (req, res) {
//   let id = req.params.id;
//   console.log(id);
//   connectDatabase.connection.query(
//     `DELETE FROM mahasiswa WHERE id = ${id}`,
//     function (err, result) {
//       if (err) {
//         res.status(400).send({
//           error: true,
//           message: err,
//         });
//       } else {
//         res.status(200).send({
//           error: false,
//           message: 'Successfully Delete',
//         });
//       }
//     }
//   );
// });
