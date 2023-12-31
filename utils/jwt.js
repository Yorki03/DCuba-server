
const jwt = require('jsonwebtoken');

const generarToken = ( telefono) =>{

    const paylot = {telefono}
    
    return new Promise ((resolve, reject) =>{

        jwt.sign(paylot, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject(err);
            }else{
                resolve(token);
            }
        })
    });

}

module.exports={
    generarToken
}