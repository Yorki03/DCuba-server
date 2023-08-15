const { response } = require('express');
const UserModel = require('../models/usuario');
const bcrypt = require('bcryptjs');
const{ generarToken } = require('../utils/jwt');
const { async } = require('rxjs');

const crearUsuario =  async(req, res = response) => {
   
    try {
        const {nombre, apellidos, email, telefono} = req.body;
        
        //Crear usuario en base de datos
        await UserModel.createUser(nombre, apellidos, email, telefono);

        //Generar respuesta exitosa
        return res.status(201).json({
          ok: true,
          nombre,
          apellidos,
          msg:'Creado Exitosamente.'             
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            ok:false,
            msg: 'Crear usuario /new'
        });
    }

    
}

const jugadores = async(req, res = response) => {
    
    const {nombre, apellidos, telefono } = req.body

    try {

      //Crear Usuario en DB jugadas
      await UserModel.createJugador(nombre, apellidos, telefono);

      //Respuesta del servicio 
      return res.status(201).json({
        ok: true,
        nombre,          
        msg: 'Bienvenido al Juego'
       });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        ok: false,
        msg: 'Hable con el Administrador'
    });
    }
    
   
}

const eliminarUsuario = async(req, res = response) =>{
  const id = req.params.id;

  try {
    //Eliminar usuario
    await UserModel.deleteUser(id);

    //Respuesta del servicio
    return res.status(201).json({
      ok: true,
      msg:'El usuario ha sido eliminado'
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el Administrador'
    });
  }
}

const eliminarJugador = async(req, res = response) =>{
  const id = req.params.id;

  try {
    //Eliminar jugador
    await UserModel.deleteGamer(id);

    //Respuesta del servicio
    return res.status(201).json({
      ok: true,
      msg:'El usuario ha sido eliminado'
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el Administrador'
    });
  }
}

const coicidenciaUsuario = async(req, res = response) =>{
  try {
    //Llamar a todas las coicidencias de usuarios
    const usuarios = await UserModel.getMatchsUser();
    if (!usuarios) {
      //No se enconto coicidencias
      res.status(400).json({
        ok: false,
        msg: 'No hay coicidencias de usuarios'
      })
    } else {
      //Respuesta del servicio
      return res.status(201).json({
        ok: true,
        usuarios,
        msg:'Ususarios encontrados'
      })
    }


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Hable con el Administrador'
    });
  }

}

const tokenUsuario = (req, res = response) => {
    const {telefono} = req;

    return res.json({
        ok: true,
        telefono
    })
}


module.exports = {
    crearUsuario,
    jugadores,
    eliminarUsuario,
    eliminarJugador,
    coicidenciaUsuario,
    tokenUsuario
}