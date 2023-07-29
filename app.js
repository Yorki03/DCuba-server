const express = require('express');
const cors = require('cors');
const mysqlConnect = require('./mysql');
const path = require('path');

const app = express();

//Accesos al directorio publico
app.use(express.static('public'));

//Middlewares
app.use(cors({origin: "*"}));
app.use(express.json());


//Rutas


//Puerto de conexion
app.listen(4000, ()=>{
    console.log('Servidor conectado en puerto 4000');
});

//Controlador de rutas
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});