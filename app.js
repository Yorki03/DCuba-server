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
app.get('/jugadas_centenas', (req, res) => {
  
  const sql = 'SELECT * FROM jugadas_centenas'

  mysqlConnect.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar la centena.' });
    } else {
      res.json(row);
    }
  });
}); 

//Informacion de la Tabla Jugadas Corrida
app.get('/jugadas_corrida', (req, res) => {
  
  const sql = 'SELECT * FROM  jugadas_corridas'

  mysqlConnect.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar la corrida.' });
    } else {
      res.json(row);
    }
  });
}); 

//Informacion de la Tabla Jugadas Parles
app.get('/jugadas_parles', (req, res) => {
  
  const sql = 'SELECT * FROM jugadas_parles'

  mysqlConnect.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar el parle.' });
    } else {
      return res.json(row);
    }
  });
});

//Informacion de la Tabla Jugadas Normales
app.get('/jugadas_normales', (req, res) => {
  
  const sql = 'SELECT * FROM jugadas_normales'

  mysqlConnect.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar la jugada.' });
    } else {
      res.json(row); 
    }
  });
});

//Informacion de la Tabla Noche
app.get('/limitados_noche', (req, res) => {

  const sql = 'SELECT * FROM limitados_noche';

  mysqlConnect.query(sql, (err, row) => {
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
  const sql = 'SELECT * FROM limitados_dia';

  mysqlConnect.query(sql, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al buscar los limitados de dia.' }); 
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Normales" - dia
app.get('/premios-jugadas-dia', (req, res) => {
  const sql = 'SELECT j.* FROM jugadas_normales j INNER JOIN numeros_salidos ns ON j.id_numero = ns.id_numero AND j.estado = ? AND  j.estado = ns.estado';
  const estado = 'dia';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  })
});
//Busqueda de premios en la Tabla "Juganas Normales" - noche
app.get('/premios-jugadas-noche', (req, res) => {
  const sql = 'SELECT j.* FROM jugadas_normales j INNER JOIN numeros_salidos ns ON j.id_numero = ns.id_numero AND j.estado = ? AND  j.estado = ns.estado';
  const estado = 'noche';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  })
});

//Busqueda de premios en la Tabla "Juganas Centena" -dia
app.get('/premios-centena-dia', (req, res) => {
  const estado = 'dia'
  const sql = 'SELECT j.* FROM jugadas_centenas j INNER JOIN numeros_salidos ns ON j.centena = ns.centena AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});
//Busqueda de premios en la Tabla "Juganas Centena" -noche
app.get('/premios-centena-noche', (req, res) => {
  const estado = 'noche'
  const sql = 'SELECT j.* FROM jugadas_centenas j INNER JOIN numeros_salidos ns ON j.centena = ns.centena AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    } 
  });
});
/**************************************************************************************************************************************************************/
/** Premios de Corridos del Dia **/
//Busqueda de premios en la Tabla "Juganas Corricos" -1
app.get('/premios-corridos1-dia', (req, res) => {
  const estado = 'dia';
  const sql = 'SELECT j.* FROM jugadas_corridas j INNER JOIN numeros_salidos ns ON j.id_numero = ns.numero1_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Corricos" -2
app.get('/premios-corridos2-dia', (req, res) => {
  const estado = 'dia';
  const sql = 'SELECT j.* FROM jugadas_corridas j INNER JOIN numeros_salidos ns ON j.id_numero = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});


/** Premios de Corridos de la Noche **/
//Busqueda de premios en la Tabla "Juganas Corricos" -1
app.get('/premios-corridos1-noche', (req, res) => {
  const estado = 'noche';
  const sql = 'SELECT j.* FROM jugadas_corridas j INNER JOIN numeros_salidos ns ON j.id_numero = ns.numero1_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Corricos" -2
app.get('/premios-corridos2-noche', (req, res) => {
  const estado = 'noche';
  const sql = 'SELECT j.* FROM jugadas_corridas j INNER JOIN numeros_salidos ns ON j.id_numero = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

/*********************************************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************************************/
//Premios que salieron en el dia
//Busqueda de premios en la Tabla "Juganas Parles" -fijo con corrido1
app.get('/premios-parles-dia-fijo1', (req, res) => {
  const estado = 'dia';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON ns.id_numero = j.id_numero1 AND j.id_numero2 = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Parles" -fijo con corrido2
app.get('/premios-parles-dia-fijo2', (req, res) => {
  const estado = 'dia';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON  ns.id_numero = j.id_numero2  AND j.id_numero1 = ns.numero1_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Parles" -numeros corridos combinados
app.get('/premios-parles-dia-corrido', (req, res) => {
  const estado = 'dia';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON j.id_numero1 = ns.numero1_corrido AND j.id_numero2 = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Premios que salieron en e la noche
//Busqueda de premios en la Tabla "Juganas Parles" -fijo con corrido1
app.get('/premios-parles-noche-fijo1', (req, res) => {
  const estado = 'noche';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON ns.id_numero = j.id_numero1 AND j.id_numero2 = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Parles" -fijo con corrido2
app.get('/premios-parles-noche-fijo2', (req, res) => {
  const estado = 'noche';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON  ns.id_numero = j.id_numero2  AND j.id_numero1 = ns.numero1_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

//Busqueda de premios en la Tabla "Juganas Parles" -numeros corridos combinados
app.get('/premios-parles-noche-corrido', (req, res) => {
  const estado = 'noche';
  const sql = 'SELECT j.* FROM jugadas_parles j INNER JOIN numeros_salidos ns ON j.id_numero1 = ns.numero1_corrido AND j.id_numero2 = ns.numero2_corrido AND j.estado = ? AND j.estado = ns.estado';

  mysqlConnect.query(sql, [estado], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al buscar los premios'});
    } else {
      res.json(row);
    }
  });
});

/******************************************************************************************************************************************************************************************************/

//Informacion de numeros salidos
app.get('/numero-dia', (req, res) => {
  const estado = 'dia';
  const sql = `SELECT * FROM numeros_salidos WHERE estado= ?`;

  mysqlConnect.query(sql, [estado], (err, row) =>{
    if(err){
      console.log(err);
      res.status(500).json({error: 'Error al buscar los numeros del dia.'});
    }else{
      res.json(row);
    }
  });
}); 

//Informacion de numeros salidos
app.get('/numero-noche', (req, res) => {
  const estado = 'noche';
  const sql = `SELECT * FROM numeros_salidos WHERE estado= '${estado}'`;

  mysqlConnect.query(sql, (err, row) =>{
    if(err){
      console.log(err);
      res.status(500).json({error: 'Error al buscar los numeros de la noche.'});
    }else{
      res.json(row);
    }
  });
});
/*************************************************************************************************************************************************************************************************/

//Informacion de el dinero jugado en total
app.get('/dinero_bruto', (req, res) =>{
  const sql = 'SELECT SUM(dinero_fijo)AS suma_total FROM(SELECT dinero_fijo FROM jugadas_normales UNION ALL SELECT dinero FROM jugadas_corridas UNION ALL SELECT dinero FROM jugadas_centenas UNION ALL SELECT dinero FROM jugadas_parles) AS subconsulta;';

  mysqlConnect.query(sql, (err, row) =>{
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error al buscar e dinero total' });
    } else {
      res.json(row);
    }
  }) 
});

/**************************************************************************************************************************************************************************************************************************************************************************/
/**ITRODUCCION DE INFORMACION A LA BASE DE DATOS**/
//Jugada centena echa por el usuario
app.post('/centena', (req, res) => {
  const { dinero, numero, estado, telefono, id_numero} = req.body;
  const sql = 'INSERT INTO jugadas_centenas(dinero, numero, estado, telefono, id_numero) VALUES (?,?,?,?,?)';

  mysqlConnect.query(sql, [dinero, numero, estado, telefono, id_numero], (err,row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      res.status(201).json({
        ok: true,
        msg: 'Jugada exitosa'
      });
    }
  });

});

//Jugadas parles echas por el usuario
app.post('/parles', (req, res) =>{
  const {dinero, telefono, estado, id_numero1, id_numero2,} = req.body;
  const sql = 'INSERT INTO jugadas_parles(dinero, telefono, estado, id_numero1, id_numero2) VALUES (?,?,?,?,?)';

  mysqlConnect.query(sql, [dinero, telefono, estado, id_numero1, id_numero2], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      res.status(201).json({
        ok: true,
        msg: 'Jugada exitosa'
      })
    }
  });
});

//Jugadas normales del usuario
app.post('/normal', (req, res) =>{
  const {dinero_fijo,  estado, telefono, id_numero} = req.body;
  const sql = 'INSERT INTO jugadas_normales (dinero_fijo, estado, telefono, id_numero) VALUES ( ?, ?, ?, ?)';

  mysqlConnect.query(sql, [dinero_fijo, estado, telefono, id_numero ], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introducir la jugada'});
    } else {
      res.status(201).json({ 
        ok: true,
        msg: 'Jugada Exitosa'
      });
    }
  });
});
//Jugadas Corridas del usuario
app.post('/corridas', (req, res) =>{
  const sql = 'INSERT INTO jugadas_corridas( telefono, estado, dinero, id_numero) VALUES (?,?,?,?)';
  const {telefono, estado, dinero, id_numero} = req.body;

  mysqlConnect.query(sql, [telefono, estado, dinero, id_numero], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'Error al introdiir la jugada'})
    } else {
      res.status(201).json({
        ok: true,
        msg: 'Jugada Exitosa'
      });
    }
  });
});

//Colocar los nuemeros en Tabla limitados dias
app.post('/limitados-dia2', (req, res) =>{
  const {numero, fecha} = req.body;
  const sql = 'INSERT INTO limitados_dia(numero, fecha) VALUES (?,?)';

  mysqlConnect.query(sql, [numero, fecha], (err, row) =>{
    if (err) {
      console.log(err);
      res.static(500).json({error: 'Error al ejecutar la accion'})
    } else {
      res.json(row);
    }
  });
});

//Colocar los nuemeros en Tabla limitados noches
app.post('/limitados-noche2', (req, res) =>{
  const {numero, fecha} = req.body;
  const sql = 'INSERT INTO limitados_noche(numero, fecha) VALUES (?,?)';

  mysqlConnect.query(sql, [numero, fecha], (err, row) =>{
    if (err) {
      console.log(err);
      res.static(500).json({error: 'Error al ejecutar la accion'})
    } else {
      res.json(row);
    }
  });
});

/****************************************************************************************************************************************************/
//Normales
app.delete('/eliminar_jugada_normal/:id_jugadas_normales', (req, res) =>{
  const id_jugadas_normales = req.params.id_jugadas_normales;
  const sql = 'DELETE FROM jugadas_normales WHERE id_jugadas_normales = ?';
  mysqlConnect.query(sql, [id_jugadas_normales], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'error al eliminar jugada'});
    } else {
      res.json({
        ok: true,
        msg: 'Eliminacion exitosa'
      });
    }
  });
});
//Centena
app.delete('/eliminar_jugada_centena/:id_cemtenas', (req, res) =>{
  const id_cemtenas = req.params.id_cemtenas;
  const sql = 'DELETE FROM  jugadas_centenas WHERE id_cemtenas = ?';
  mysqlConnect.query(sql, [id_cemtenas], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'error al eliminar jugada'});
    } else {
      res.json({
        ok: true,
        msg: 'Eliminacion exitosa'
      }); 
    }
  });
});
//Corridas
app.delete('/eliminar_jugada_corrida/:id_jugadas_corridas', (req, res) =>{
  const id_jugadas_corridas = req.params.id_jugadas_corridas;
  const sql = 'DELETE FROM jugadas_corridas WHERE id_jugadas_corridas = ?';
  mysqlConnect.query(sql, [id_jugadas_corridas], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'error al eliminar jugada'});
    } else {
      res.json({
        ok: true,
        msg: 'Eliminacion exitosa'
      });
    }
  });
});
//Parleses
app.delete('/eliminar_jugada_parles/:id_parles', (req, res) =>{
  const id_parles = req.params.id_parles;
  const sql = 'DELETE FROM  jugadas_parles WHERE id_parles = ?';
  mysqlConnect.query(sql, [id_parles], (err, row) =>{
    if (err) {
      console.log(err);
      res.status(500).json({error: 'error al eliminar jugada'});
    } else {
      res.json({
        ok: true,
        msg: 'Eliminacion exitosa'
      });
    }
  });
});

/****************************************************************************************************************************************************/
//Introducir mensaje de soporte
app.post('/soporte', (req, res)=>{
  const mensaje = req.body;
  const sql = 'INSERT INTO soporte(mensaje) VALUES (?)'

  mysqlConnect.query(sql, mensaje, (err, rew) =>{
    if (err) {
      console.log(err);
      res.static(500).json({error: 'Error al enviar el mensaje'})
    } else {
      res.json(row);
    }
  });
})


/*********************************************************************************************************************************************************/

//Puerto de conexion
app.listen(4000, ()=>{
    console.log('Servidor conectado en puerto 4000');
});

//Controlador de rutas
/*app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});*/