const express = require('express');
const cors = require('cors');
const mysqlConnect = require('./mysql');
const path = require('path');
require('dotenv').config();

const app = express();

//Accesos al directorio publico
app.use(express.static('public'));

//Middlewares
app.use(cors({origin: "*"}));
app.use(express.json());


//Rutas
//Crearcion y Login de usuario
app.use('/auth', require('./routes/auth'));

/**PERTICIONES DE INFORMACION A LA BASE DE DATOS**/
//Informacion de la Tabla Jugadas Centenas
app.get('/jugadas-centenas', (req, res) => {
  const {fecha} = req.body;
  const sql = 'SELECT * FROM jugadas_centenas WHERE fecha= ?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar la centena.' });
    } else {
      res.json(row);
    }
  });
});

//Informacion de la Tabla Jugadas Parles
app.get('/jugadas-parles', (req, res) => {
  const {fecha} = req.body;
  const sql = 'SELECT * FROM jugadas_parles WHERE fecha= ?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar el parle.' });
    } else {
      return res.json(row);
    }
  });
});

//Informacion de la Tabla Jugadas Normales
app.get('/jugadas-normales', (req, res) => {
  const {fecha} = req.body;
  const sql = 'SELECT * FROM jugadas_normales WHERE fecha= ?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar la jugada.' });
    } else {
      res.json(row);
    }
  });
});

//Informacion de la Tabla Noche
app.get('/limitados-noche', (req, res) => {
  const {fecha} = req.body;
  const sql = 'SELECT * FROM limitados_noche WHERE fecha= ?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar los limitados de noche.' });
    } else {
      res.json(row);
    }
  });
}); 

//Informacion de la Tabla Dia
app.get('/limitados-dia', (req, res) => {
  const {fecha} = req.body;
  const sql = 'SELECT * FROM limitados_dia WHERE fecha= ?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar los limitados de dia.' });
    } else {
      res.json(row);
    }
  });
});

//Informacion de los pagos por dia
app.get('/pagos-diarios', (req, res) => {

  const {fecha, pagos} = req.body;
  const sql = 'SELECT * FROM pagos WHERE fecha=? AND horario=?'

  mysqlConnect.query(sql, [fecha, pagos], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar los limitados de dia.' });
    } else {
      res.json(row);
    }
  });
});

/**ITRODUCCION DE INFORMACION A LA BASE DE DATOS**/
//Jugada centena echa por el usuario
app.post('/centena', (req, res) => {
  const {numero, dinero, fecha, id_usuario} = req.body;
  const sql = 'INSERT INTO jugadas_centenas(numero, dinero, fecha, id_usuario) VALUES (?,?,?,?)';

  mysqlConnect.query(sql, [numero, dinero, fecha, id_usuario], (err,row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      res.json(row);
    }
  });

});

//Jugadas parles echas por el usuario
app.post('/parles', (req, res) =>{
  const {dinero, id_numero1, id_numero2, fecha, id_usuario} = req.body;
  const sql = 'INSERT INTO jugadas_parles(dinero, fecha, id_numero1, id_numero2, id_usuario) VALUES (?,?,?,?,?)';

  mysqlConnect.query(sql, [dinero, fecha, id_numero1, id_numero2, id_usuario], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      return res.json(row);
    }
  });
});

//Jugadas normales del usuario
app.post('/normal', (req, res) =>{
  const {dinero_fijo, dinero_corrido, fecha, id_usuario, id_numero} = req.body;
  const sql = 'INSERT INTO jugadas_normales (dinero_fijo, dinero_corrido, fecha, id_usuario, id_numero) VALUES ( ?, ?, ?, ?, ?)';

  mysqlConnect.query(sql, [dinero_fijo, dinero_corrido, fecha, id_usuario, id_numero ], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      res.json(row);
    }
  });
});

/**************************************************************************************************************/

//Puerto de conexion
app.listen(4000, ()=>{
    console.log('Servidor conectado en puerto 4000');
});

//Controlador de rutas
/*app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});*/