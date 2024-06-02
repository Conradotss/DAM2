import {check, validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generarToken, generarJWT } from '../utils/tokens.js';
import {emailRegistro, emailRecuperarPassword} from '../utils/emails.js'
  
//Funciones Login
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        csrfToken: req.csrfToken(),
        pagina: 'Iniciar Sesión'
    })
};

const autenticar = async (req, res) => {
    await check('email').isEmail().withMessage('email incorrecto').run(req)
    await check('password').notEmpty().withMessage('El campo password no debe estar vacio').run(req)
    let resultado = validationResult(req)

    if(!resultado.isEmpty()){
        return res.render('auth/login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {email, password} = req.body

    const usuario = await Usuario.findOne({where:{email}})

    if(!usuario){
        return res.render('auth/login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'El usuario no esta registrado'}]
        })
    }

    if(!usuario.confirmado){
        return res.render('auth/login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'No has verificado tu cuenta'}]
        })
    }

    if(!usuario.verificarPassword(password)){
        return res.render('auth/login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'Password incorrecto'}],
            usuario: {
                email: req.body.email
            }
        })
    }

    const token = generarJWT({id: usuario.id, nombre: usuario.nombre})

    return res.cookie('_token', token, {
        httpOnly: true,
        //secure: true,
        //sameSite: true
    }).redirect('/mis-proyectos')


}
//Cerrar sesion
const cerrarSesion = (req, res) => {
    return res.clearCookie('_token').status(200).redirect('/') //Limpiamos la cookie con la informacion del usuario y lo redirijimos al login
}


//Funciones Registro
const formularioRegistro = (req, res) => {
    console.log(req.csrfToken())

    res.render('auth/registro', {
        pagina: 'Crear Cuenta',
        csrfToken: req.csrfToken()
    })
};

const registro = async (req, res) =>{
    await check('nombre').notEmpty().withMessage('El nombre no puede estar vacío').run(req)
    await check('email').isEmail().withMessage('email incorrecto').run(req)
    await check('password').isLength({min: 6}).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    await check('rpassword').equals(req.body.password).withMessage('Los passwords no son iguales').run(req)

    let resultado = validationResult(req)

    //return res.json(resultado.array())

    if(!resultado.isEmpty()){
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email,
            }
        })
    }
    const {nombre, email, password} = req.body
    const usuarioExistente = await Usuario.findOne({where: {email}})
    console.log(usuarioExistente)

    if(usuarioExistente){
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            csrfToken: req.csrfToken(),
            errores: [{msg: `el correo ${email} ya esta registrado`}],
        })
    }

    //recogemos la información de los formularios y con ellos creamos un usuario
    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarToken()
    })

    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    res.render('template/mensaje-confirmacion', {
        csrfToken: req.csrfToken(),
        pagina: 'Cuenta Creada',
        mensaje: 'Confirma tu cuenta siguiendo las instrucciones enviadas a tu correo'
    })

};

const confirmar = async (req, res) => {
    //Coge los parametros de la url
    const {token} =  req.params;

    const usuario = await Usuario.findOne({where:{token}})
    //Mensaje en caso de error 
    if(!usuario){
        return res.render('auth/usuario-confirmado',{
            pagina: 'Error al confirmar',
            mensaje: 'Se produjo un error al intentar confirmar tu cuenta',
            error: true
        })
    }

    //Confirmar la cuenta
    //Vaciamos el campos token
    usuario.token = null;
    //y el campo confirmado a true
    usuario.confirmado= true;
    //Actualizamos el usuario
    await usuario.save();

    console.log(usuario);

    res.render('auth/usuario-confirmado', {
        pagina: 'Cuenta Confirmada',
        mensaje: 'La cuenta se confirmó correctamente'
    })

}



//Funciones Recuperar Contraseña
const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        csrfToken: req.csrfToken(),
        pagina: 'Recuperar Contraseña'
    })
}

const resetPassword = async (req, res) => {

    await check('email').isEmail().withMessage('email incorrecto').run(req)

    let resultado = validationResult(req)

    //return res.json(resultado.array())

    if(!resultado.isEmpty()){
        return res.render('auth/olvide-password', {
            pagina: 'Recuperar Contraseña',
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {email} = req.body


    const usuario = await Usuario.findOne({where: {email}})

    if(!usuario){
        return res.render('auth/olvide-password', {
            pagina: 'Recuperar Contraseña',
            csrfToken: req.csrfToken(),
            errores:[{msg: 'El correo no esta registrado'}]
        })
    }

    usuario.token = generarToken();
    await usuario.save();

    emailRecuperarPassword({
        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token
    })

    res.render('template/mensaje-confirmacion',{
        pagina: 'Restablece Password',
        mensaje: 'Hemos enviado las instrucciones a tu email'
    })
}

const comprobarToken = async (req, res) => {
    const { token } = req.params
    
    const usuario = await Usuario.findOne({where:{token}})

    if(!usuario){
        return res.render('auth/usuario-confirmado', {
            pagina: 'Restablece Password',
            mensaje: 'Se produjo un error al intentar cambiar password',
            error: true
        })
    }

    res.render('auth/cambiar-password', {
        csrfToken: req.csrfToken(),
        pagina: 'Restablece Password'
    })
}

const nuevoPassword = async (req, res) => {
    await check('password').isLength({min: 6}).withMessage('El password debe ser de al menos 6 caracteres').run(req)
    let resultado = validationResult(req)

    if(!resultado.isEmpty()){
        return res.render('auth/cambiar-password', {
            pagina: 'Restablece Password',
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {token} = req.params;
    const {password} = req.body;
    //Busca el usuario que esta cambiando en password a traves del token
    const usuario = await Usuario.findOne({where:{token}})

    const salt = await bcrypt.genSalt(10)
    usuario.password = await bcrypt.hash(password, salt)
    usuario.token= null;
    await usuario.save();

    res.render('auth/usuario-confirmado', {
        pagina: 'Password Restablecido',
        mensaje: 'El password se guardo correctamente'
    })
}



export{
    formularioLogin,
    autenticar,
    cerrarSesion,
    formularioRegistro,
    registro,
    confirmar,
    formularioOlvidePassword,
    resetPassword,
    nuevoPassword,
    comprobarToken
}