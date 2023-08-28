const mysqlConnect = require('../mysql');

// Definir el objeto del modelo de usuario
const UserModel = {};

// Obtener todos los usuarios
UserModel.getAllUsers = (callback) => {
    mysqlConnect.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      throw error;
    }
    callback(results);
  });
};

// Obtener los datos que coiciden en tabla usuario y tabla jugadores
UserModel.getMatchsUser = () => {
  mysqlConnect.query(`SELECT usuario.nombre, usuario.apellidos,usuario.telefono, jugadores.nombre, jugadores.apellidos, jugadores.telefono
    FROM usuario INNER JOIN jugadores ON usuario.telefono = jugadores.telefono`,  (error, result) => {
  if (error) {
    throw error;
  }else{
    console.log(result + 'Peticion exitosa Coicidencias');
  }
});
};

// Crear un nuevo usuario
UserModel.createUser = (nombre,  apellidos, email, telefono) => {
  mysqlConnect.query('INSERT INTO usuario( nombre, apellidos, email, telefono, password) VALUES (?,?,?,?,?)', 
    [nombre, apellidos, email, telefono, password], (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Usuario Creado');
    }
    
  });
};

// Crear Jugador en la DB
UserModel.createJugador = (nombre, telefono) => {
  mysqlConnect.query('INSERT INTO jugadores( nombre, telefono) VALUES (?,?)', 
    [nombre, telefono,], (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Jugador Creado');
    }
    
  });
};

//Obtener nombre de usuario por su Telefono
UserModel.getUserByName = (telefono) => {
  mysqlConnect.query('SELECT nombre FROM usuario WHERE telefono = ?', telefono, (error, result) => {
  if (error) {
    throw error;
  }else{
    console.log(result + 'Peticion exitosa');
  }
  
});
};


// Obtener el ID del usuario
UserModel.getUserById = (telefono) => {
    mysqlConnect.query('SELECT id_usuario FROM jugadores WHERE telefono = ?', telefono, (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Peticion exitosa ID usuario');
    }
  });
};


// Eliminar un usuario
UserModel.deleteUser = (userId) => {
    mysqlConnect.query('DELETE FROM usuario WHERE id = ?', userId, (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log('Usuario eliminado');
    }
  });
};

// Eliminar un jugador
UserModel.deleteGamer = (userId) => {
  mysqlConnect.query('DELETE FROM jugadores WHERE id = ?', userId, (error, result) => {
  if (error) {
    throw error;
  }else{
    console.log('Jugador eliminado');
  }
});
};

// Exportar el modelo de usuario
module.exports = UserModel;