import {check, validationResult} from 'express-validator'
import { generarToken, generarJWT } from '../utils/tokens.js';
import {Op} from "sequelize";
import bcrypt from 'bcrypt'
import Tutor from '../models/Tutor.js'
import {Proyecto, Archivo, Usuario} from '../models/relaciones.js'
import {emailComentario} from '../utils/emails.js'

const formularioLoginTutor = (req, res) => {
    res.render('auth/tutor-login', {
        csrfToken: req.csrfToken(),
        pagina: 'Iniciar Sesión como tutor'
    })
};

const autenticarTutor = async (req, res) => {
    await check('email').isEmail().withMessage('email incorrecto').run(req)
    await check('password').notEmpty().withMessage('El campo password no debe estar vacio').run(req)
    let resultado = validationResult(req)

    if(!resultado.isEmpty()){
        return res.render('auth/tutor-login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {email, password} = req.body

    const tutor = await Tutor.findOne({where:{email}})


    if(!tutor){
        return res.render('auth/tutor-login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'El tutor no esta registrado'}]
        })
    }

    if(!tutor.confirmado){
        return res.render('auth/tutor-login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'No has verificado tu cuenta'}]
        })
    }

    if(!tutor.verificarPassword(password)){
        return res.render('auth/tutor-login', {
            pagina: 'Iniciar Sesión',
            csrfToken: req.csrfToken(),
            errores: [{msg: 'Password incorrecto'}],
            tutor: {
                email: req.body.email
            }
        })
    }
    const token = generarJWT({id: tutor.id, nombre: tutor.nombre})

    return res.cookie('_token', token, {
        httpOnly: true,
        //secure: true,
        //sameSite: true
    }).redirect('/proyectos-tutor')
}

const filtroTutor = async (req, res) => {
    const {busquedaTitulo, busquedaAutor, busquedaCiclo} = req.body;
    console.log("Busqueda titulo: "+busquedaTitulo)
    console.log("Busqueda tutor: "+busquedaAutor)
    console.log("Busqueda ciclo: "+busquedaCiclo)
    if(busquedaTitulo && busquedaAutor && busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaAutor=${busquedaAutor}&busquedaCiclo=${busquedaCiclo}`); 
    }else if(busquedaTitulo && !busquedaAutor && !busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaTitulo=${busquedaTitulo}`);
    }else if(busquedaTitulo && !busquedaAutor && busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaCiclo=${busquedaCiclo}`);
    }else if(busquedaTitulo && busquedaAutor && !busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaAutor=${busquedaAutor}`);
    }else if(!busquedaTitulo && busquedaAutor && !busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaAutor=${busquedaAutor}`);
    }else if(!busquedaTitulo && busquedaAutor && busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaAutor=${busquedaAutor}&busquedaCiclo=${busquedaCiclo}`);
    }else if(!busquedaTitulo && !busquedaAutor && busquedaCiclo){
        return res.redirect(`/proyectos-tutor?pagina=1&busquedaCiclo=${busquedaCiclo}`);
    }else{
        return res.redirect('/proyectos-tutor?pagina=1');
    }
}

const tutorDashboard = async (req, res) => {
    const { pagina: paginaActual, busquedaTitulo, busquedaAutor, busquedaCiclo} = req.query;
    console.log("Resultado de nombre es : "+busquedaAutor)

    const expresionRegular = /^[0-9]$/

    if(!expresionRegular.test(paginaActual)){
        return res.redirect('/proyectos-tutor?pagina=1'); // Si no es un numero o no tiene, redirige a la pagina 1
    }
    const { id } = req.tutor;
    const tutor = await Tutor.findByPk(id);
    const limite = 10;
    const offset = ((paginaActual * limite) - limite)
    const whereOptions = {
        tutor: tutor.nombre
    };

    if (busquedaTitulo) {
        whereOptions.titulo = {
            [Op.like]: `%${busquedaTitulo}%`
        };
    }
    if (busquedaCiclo) {
        whereOptions.ciclo = {
            [Op.like]: `%${busquedaCiclo}%`
        };
    }
    if (busquedaAutor) {
        whereOptions.autor = {
            [Op.like]: `%${busquedaAutor}%`
        };
    }

    const [proyectos, total] = await Promise.all([
        await Proyecto.findAll({
            limit: limite,
            offset,
            where: whereOptions,
            include: [
                {
                    model: Archivo,
                    as: 'archivos'
                }
            ]
        }),
        Proyecto.count({
            where: whereOptions
        })
    ])

    res.render('gestion/tutor-dashboard', {
        pagina: 'Pagina tutor',
        estado: 'Aun no tienes proyectos asignados',
        csrfToken: req.csrfToken(),
        proyectos,
        paginas: Math.ceil(total / limite),
        paginaActual,
        busquedaTitulo,
        busquedaAutor,
        busquedaCiclo,
        total,
        limite,
        offset
    })
}

const cerrarSessionTutor = (req, res) => {
    return res.clearCookie('_token').status(200).redirect('/')
}

const inicioTutor = async (req, res) => {
    const {id} = req.params;

    const proyecto = await Proyecto.findByPk(id, {
        include: [
            {
                model: Archivo,
                as: 'archivos'
            }
        ]
    } );

    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }

    res.render('gestion/mostrar-tutor', {
        csrfToken: req.csrfToken(),
        proyecto,
        pagina: proyecto.titulo
    })
}

const comentarioTutor = async (req, res) => {
    const {id} = req.params;
    const {comentario} = req.body;
    const {email} = req.tutor;
    const proyecto = await Proyecto.findByPk(id);

    let comentarioTutor = "Comentario sobre el proyecto " + proyecto.titulo + ":\n" + comentario;

    const usuario = await Usuario.findOne({ where: { nombre: proyecto.autor } });

    emailComentario({
        nombre: proyecto.autor,
        email: email,
        emailUsuario: usuario.email,
        mensaje: comentarioTutor
    });

    return res.redirect(`/proyectos-tutor`);

}

export {
    formularioLoginTutor,
    autenticarTutor,
    filtroTutor,
    tutorDashboard,
    cerrarSessionTutor,
    inicioTutor,
    comentarioTutor
}