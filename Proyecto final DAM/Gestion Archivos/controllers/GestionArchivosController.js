import {unlink} from "node:fs/promises";
import { validationResult } from "express-validator";
import {Proyecto, Archivo} from "../models/relaciones.js";

const inicio = async (req, res) => {

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
        return res.redirect('/404');
    }

    res.render('gestion/mostrar', {
        proyecto,
        pagina: proyecto.titulo
    })
}

const dashboard = async (req, res) => {

    const {pagina: paginaActual} = req.query;

    const expresionRegular = /^[0-9]$/ // Expresion regular para validar que empieza y termina por un numero 

    if(!expresionRegular.test(paginaActual)){
        return res.redirect('/mis-proyectos?pagina=1'); // Si no es un numero o no tiene, redirige a la pagina 1
    }

    const { id } = req.usuario;
    const { busqueda } = req.body;

    const limite = 6;
    const offset = ((paginaActual * limite) - limite)

    const whereOptions = {
        usuarioId: id
    };

    if (busqueda) {
        whereOptions.titulo = {
            [Op.like]: `%${busqueda}%`
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

    console.log("Proyectos totales que tiene el usuario actual: "+total);

    res.render('gestion/dashboard', {
        pagina: 'Inicio',
        estado: 'Aun no tienes proyectos creados',
        csrfToken: req.csrfToken(),
        proyectos,
        paginas: Math.ceil(total / limite),
        paginaActual,
        total,
        limite,
        offset
    });
}
const nuevoProyecto = (req, res) =>
{
    res.render('gestion/nuevo-proyecto',{
        pagina: 'Crea tu nuevo proyecto',
        csrfToken: req.csrfToken(),
        datos: {}
    })
}

const guardarProyecto = async (req, res) => {
    let resultado = validationResult(req);

    if(!resultado.isEmpty()){
        return res.render('gestion/nuevo-proyecto',{
            pagina: 'Crea tu nuevo proyecto',
            csrfToken: req.csrfToken(),
            errores: resultado.array(),
            datos: req.body
        })
    }
    const { titulo, descripcion, tecnologia } = req.body;
    const {nombre: autor} = req.usuario;

    console.log(req.usuario.id)

    const {id: usuarioId} = req.usuario;
    try{
        const proyectoguardado = await Proyecto.create({
            titulo,
            descripcion,
            autor,
            tecnologia,
            usuarioId : usuarioId
        });

        console.log(proyectoguardado);

        const {id} = proyectoguardado;
        res.redirect(`/nuevo-proyecto/${id}`);
    }catch(error){
        console.log(error);
    }


}

const agregarArchivos= async (req, res) => {
    const {id} = req.params;

    const proyecto = await Proyecto.findByPk(id);

    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    console.log(req.usuario);
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }

    res.render('gestion/agregar-archivos', {
        pagina: `Agrega archivos a tu proyecto ${proyecto.titulo}`,
        csrfToken: req.csrfToken(),
        proyecto
    })
}
const guardarArchivos = async (req, res, next) => {
    const {id} = req.params;

    const proyecto = await Proyecto.findByPk(id);
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }

    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }
    try{
        // Itera sobre cada archivo en req.files
        for (const file of req.files) {
            console.log(file);
            const {originalname, size, destination} = file;
            const archivo = await Archivo.create({
                nombre: originalname,
                peso: size,
                ruta_almacenamiento: destination+"/" + originalname,
                proyectoId: proyecto.id,  
            });
            console.log(archivo);
        }
        next();

    }catch(error){
        console.log(error);
    }
}

 const editarProyecto = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findByPk(id);
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }
    res.render('gestion/editar-proyecto', {
        pagina: `Edita tu proyecto ${proyecto.titulo}`,
        datos: {id: proyecto.id ,titulo: proyecto.titulo, descripcion: proyecto.descripcion, tecnologia: proyecto.tecnologia},
        csrfToken: req.csrfToken()
    })
}

const GuardarCambiosProyecto = async (req, res) => {
    let resultado = validationResult(req);

    if(!resultado.isEmpty()){
        return res.render('gestion/editar-proyecto',{
            pagina: 'Modifica tu proyecto',
            csrfToken: req.csrfToken(),
            errores: resultado.array(),
            datos: req.body
        })
    }

    const {id} = req.params;
    const proyecto = await Proyecto.findByPk(id);
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }

    try{
        const {titulo, descripcion, tecnologia} = req.body;
        proyecto.set({titulo, descripcion, tecnologia});
        await proyecto.save();
        res.redirect('/mis-proyectos');
    }catch(error){
        console.log(error);
    }
}

const eliminarProyecto = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findByPk(id);
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }
    const archivos = await Archivo.findAll({
        where: {
            proyectoId: proyecto.id
        }
    });
    try{
        for (const archivo of archivos) {
            await unlink(archivo.ruta_almacenamiento);
            await archivo.destroy();
        }
        await proyecto.destroy();
        res.redirect('/mis-proyectos');

    }catch(error){
    console.log(error);
    }
}


export {
    inicio,
    dashboard,
    nuevoProyecto,
    guardarProyecto,
    agregarArchivos,
    guardarArchivos,
    editarProyecto,
    GuardarCambiosProyecto,
    eliminarProyecto
};