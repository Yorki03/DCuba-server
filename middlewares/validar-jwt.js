const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) =>{
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se proporcionó un token'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.telefono = decoded.telefono;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        });
    }
};

module.exports ={
    validarJWT
};