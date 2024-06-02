import jwt from 'jsonwebtoken';
import Tutor from '../models/Tutor.js';

const proteccionRutasTutor = async (req, res, next) => {
    //Comprobamos si existe la cookie
    const {_token} = req.cookies;
    //Si no existe la cookie redirigimos al login
    if(!_token){
        return res.redirect('/auth/login');
    }

    try{
        //Verificamos si el token es valido
        const decoded = jwt.verify(_token, process.env.JWT_SECRET);
        const tutor = await Tutor.scope('sinPassword').findByPk(decoded.id);
        //Si el usuario existe lo guardamos en la request
        if(tutor){
            req.tutor = tutor;
        }else{
            //Si no existe redirigimos al login
            return res.redirect('/tutor-login');
        }
        
        console.log(tutor);
        return next();
    }catch(error){
        console.log(error)
        //Si el token no es valido redirigimos al login
        return res.redirect('/tutor-login');
    }

    next();
}

export default proteccionRutasTutor;