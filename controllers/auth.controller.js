const { response } = require('express');
const UserModel = require('../models/usuario');
const bcrypt = require('bcryptjs');
const{ generarToken } = require('../utils/jwt');

const crearUsuario =  async(req, res = response) => {
   
    try {
        const {nombre, apellidos, email, telefono, password} = req.body;

        //Verificar correo existente
        let usuario = await UserModel.getUserByMovil(telefono);
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg:'Un usuario ya existe con ese correo'
            });
        }

        //Hashear el password
        const salt = bcrypt.genSaltSync();

        //Generar el JWT
        const token = await generarToken(telefono);
        
        //Crear usuario en base de datos
        await UserModel.createUser(nombre, apellidos, email, telefono, bcrypt.hashSync(password, salt));

        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            nombre,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            ok:true,
            msg: 'Crear usuario /new'
        });
    }

    
}

const loginUsuario = async(req, res = response) => {
    
    const {telefono, password} = req.body

    try {

        //Comprobar si el Telefono es correcto
        let usuario;
        UserModel.getUserByMovil(telefono, (error, result) => {
          if (error) {
            throw error;
          } else {
            if (result.length === 0) {
              return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
              });
            } else {
              usuario = result[0];
            }
          }
        })
       
        //Comprobar si el password es correcto
        let idUsuario; 
        UserModel.getUserById(telefono, (error, result) => {
            if (error) {
                throw error;
              } else {
                if (result.length === 0) {
                  return res.status(400).json({
                    ok: false,
                  });
                } else {
                    idUsuario = result[0];
                    if (idUsuario) {
                        let passwordUser; 
                        UserModel.getUserByPassword(idUsuario, (error, result) => {
                            if (error) {
                                throw error;
                              } else {
                                if (result.length === 0) {
                                  return res.status(400).json({
                                    ok: false,
                                  });
                                } else {
                                    passwordUser = result[0];
                                }
                            }
                        });
                        const passwordMarch = bcrypt.compareSync(password, passwordUser);
                        if (!passwordMarch) {
                            res.status(400).json({
                                ok: false,
                                msg: 'El password es incorrecto'
                            });
                        }
                    }else{
                        return res.status(400).json({
                            ok: false,
                            msg: 'El correo no existe --- password'
                        });
                    }
                    
                }
            }
        });


        //Generar el JWT
        const token = await generarToken(telefono)

        //Respuesta del servicio
        return res.status(201).json({
            ok: true,
            telefono,
            token
        });
        
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
    loginUsuario,
    tokenUsuario
}