const {Router} = require('express');
const { crearUsuario, loginUsuario, tokenUsuario } = require('../controllers/auth.controller');
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
    check('password', 'El password es obligatorio').isLength({min: 8}),
    validarCampos
], crearUsuario);


//Autenticacion
routes.post('/', [
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').isLength({min: 8}),
    validarCampos
], loginUsuario);

//Validar el Token
routes.get('/renew', validarJWT, tokenUsuario);


module.exports = routes;