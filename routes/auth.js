const {Router} = require('express');
const { 
    crearUsuario, 
    jugadores, 
    eliminarUsuario, 
    tokenUsuario, 
    coicidenciaUsuario,
    eliminarJugador,
    idJugadores
} = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const routes = Router();

//Registro
routes.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellidos son obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario);


//Autenticacion
routes.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    validarCampos
], jugadores);

//Eliminar un usuario
routes.delete('/eliminar-usuario/:id', eliminarUsuario);

//Eliminar un jugador
routes.delete('/eliminar-jugador/:id', eliminarJugador);

//Coicidencia de Usuarios con Jugadores
routes.get('/coicidencia', coicidenciaUsuario);

//Buscar jugador por su telefono
routes.get('/id', idJugadores)

//Validar el Token
routes.get('/renew', validarJWT, tokenUsuario);


module.exports = routes;