import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

const proteccionRutas = async (req, res, next) => {
    //Comprobamos si existe la cookie
    const {_token} = req.cookies;
    //Si no existe la cookie redirigimos al login
    if(!_token){
        return res.redirect('/auth/login');
    }

    try{
        //Verificamos si el token es valido
        const decoded = jwt.verify(_token, process.env.JWT_SECRET);
        const usuario = await Usuario.scope('sinPassword').findByPk(decoded.id);
        //Si el usuario existe lo guardamos en la request
        if(usuario){
            req.usuario = usuario;
        }else{
            //Si no existe redirigimos al login
            return res.redirect('/auth/login');
        }
        
        console.log(usuario);
        return next();
    }catch(error){
        console.log(error)
        //Si el token no es valido redirigimos al login
        return res.redirect('/auth/login');
    }

    next();
}

export default proteccionRutas;