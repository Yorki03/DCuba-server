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

// Crear un nuevo usuario
UserModel.createUser = (nombre,  apellidos, email, telefono, password) => {
  mysqlConnect.query('INSERT INTO usuario( nombre, apellidos, email, telefono, password) VALUES (?,?,?,?,?)', 
    [nombre, apellidos, email, telefono, password], (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Usuario Creado');
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

//Obtener Email de ususario
UserModel.getUserByEmail = (telefono) => {
  mysqlConnect.query('SELECT email FROM usuario WHERE telefono = ?', telefono, (error, result) => {
  if (error) {
    throw error;
  }else{
    console.log(result + 'Peticion exitosa');
  }
  
});
};


// Obtener usuarios por su Telefono
UserModel.getUserByMovil = (telefono) => {
    mysqlConnect.query('SELECT * FROM usuario WHERE telefono = ?', telefono, (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Peticion exitosa');
    }
    
  });
};

// Obtener el ID del usuario
UserModel.getUserById = (telefono) => {
    mysqlConnect.query('SELECT id_usuario FROM usuario WHERE telefono = ?', telefono, (error, result) => {
    if (error) {
      throw error;
    }else{
      console.log(result + 'Peticion exitosa');
    }
  });
};

// Obtener el password del usuario
UserModel.getUserByPassword = (idUsuario) => {
  mysqlConnect.query('SELECT password FROM usuario WHERE id_usuario= ?', idUsuario, (error, result) => {
  if (error) {
    throw error;
  }else{
    console.log(result + 'Peticion exitosa');
  }
  
});
};


// Eliminar un usuario
UserModel.deleteUser = (userId, callback) => {
    mysqlConnect.query('DELETE FROM usuario WHERE id = ?', userId, (error, result) => {
    if (error) {
      throw error;
    }
    callback();
  });
};

// Exportar el modelo de usuario
module.exports = UserModel;