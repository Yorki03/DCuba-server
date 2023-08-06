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


//Informacion de la Jugadas
app.get('/jugadas', (req, res) => {
  const fecha = req.params.fecha;
  const sql = 'SELECT * FROM jugadas WHERE fecha_de_jugada=?'

  mysqlConnect.query(sql, [fecha], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar el producto.' });
    } else {
      res.json(rows);
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Puerto de conexion
app.listen(4000, ()=>{
    console.log('Servidor conectado en puerto 4000');
});

//Controlador de rutas
/*app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});*/