import {unlink} from "node:fs/promises";
import { validationResult } from "express-validator";
import {Proyecto, Archivo} from "../models/relaciones.js";
import {Op} from "sequelize";
import fs from "fs";

const info = (req, res) => {
    res.render('template/acerca-de', {
        
    })

}

const filtro = async (req, res) => {
    const {busquedaTitulo, busquedaTutor, busquedaCiclo} = req.body;
    console.log("Busqueda titulo: "+busquedaTitulo)
    console.log("Busqueda tutor: "+busquedaTutor)
    console.log("Busqueda ciclo: "+busquedaCiclo)
    if(busquedaTitulo && busquedaTutor && busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaTutor=${busquedaTutor}&busquedaCiclo=${busquedaCiclo}`); 
    }else if(busquedaTitulo && !busquedaTutor && !busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTitulo=${busquedaTitulo}`);
    }else if(busquedaTitulo && !busquedaTutor && busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaCiclo=${busquedaCiclo}`);
    }else if(busquedaTitulo && busquedaTutor && !busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTitulo=${busquedaTitulo}&busquedaTutor=${busquedaTutor}`);
    }else if(!busquedaTitulo && busquedaTutor && !busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTutor=${busquedaTutor}`);
    }else if(!busquedaTitulo && busquedaTutor && busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaTutor=${busquedaTutor}&busquedaCiclo=${busquedaCiclo}`);
    }else if(!busquedaTitulo && !busquedaTutor && busquedaCiclo){
        return res.redirect(`/mis-proyectos?pagina=1&busquedaCiclo=${busquedaCiclo}`);
    }else{
        return res.redirect('/mis-proyectos?pagina=1');
    }
}

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
        return res.redirect('/mis-proyectos');
    }

    res.render('gestion/mostrar', {
        proyecto,
        pagina: proyecto.titulo
    })
}

const dashboard = async (req, res) => {
    const { pagina: paginaActual, busquedaTitulo, busquedaTutor, busquedaCiclo} = req.query;
    console.log("Pagina actual: "+paginaActual)  
    let exceso = false;
    const expresionRegular = /^[0-9]$/ // Expresion regular para validar que empieza y termina por un numero 

    if(!expresionRegular.test(paginaActual)){
        return res.redirect('/mis-proyectos?pagina=1'); // Si no es un numero o no tiene, redirige a la pagina 1
    }

    const { id } = req.usuario;

    const limite = 10;
    const offset = ((paginaActual * limite) - limite)

    const totalProyectosUsuario = await Proyecto.count({ where: { usuarioId: id } });

    if(totalProyectosUsuario >= 10){
        exceso = true;
    }    

    const whereOptions = {
        usuarioId: id
    };

    if (busquedaTitulo) {
        whereOptions.titulo = {
            [Op.like]: `%${busquedaTitulo}%`
        };
    }
    if (busquedaTutor) {
        whereOptions.tutor = {
            [Op.like]: `%${busquedaTutor}%`
        };
    }
    if (busquedaCiclo) {
        whereOptions.ciclo = {
            [Op.like]: `%${busquedaCiclo}%`
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
        busquedaTitulo,
        busquedaTutor,
        busquedaCiclo,
        exceso,
        total,
        limite,
        offset
    });
}

const nuevoProyecto = async (req, res) =>
{
    const{id} = req.usuario;

    const totalProyectosUsuario = await Proyecto.count({ where: { usuarioId: id } });

    console.log("Total de proyectos del usuario: "+totalProyectosUsuario);

    if(totalProyectosUsuario >= 10){
        return res.redirect('/mis-proyectos');
    }

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

    console.log(req.body);
    const { titulo, descripcion, tutor, tecnologia, proyecto, ciclo } = req.body;
    const {nombre: autor} = req.usuario;

    console.log(req.usuario.id)

    const {id: usuarioId} = req.usuario;
    try{
        const proyectoguardado = await Proyecto.create({
            titulo,
            descripcion,
            autor,
            tutor,
            tecnologia,
            tipo_proyecto: proyecto,
            ciclo,
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
    const proyecto = await Proyecto.findByPk(id, {
        include: [{
            model: Archivo,
            as: 'archivos'
        }]
    });
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }
    res.render('gestion/editar-proyecto', {
        pagina: `Edita tu proyecto ${proyecto.titulo}`,
        csrfToken: req.csrfToken(),
        datos: {id: proyecto.id ,titulo: proyecto.titulo, descripcion: proyecto.descripcion, tutor: proyecto.tutor, tecnologia: proyecto.tecnologia, proyecto: proyecto.tipo_proyecto, ciclo: proyecto.ciclo},
        proyecto
    })
}

const GuardarCambiosProyecto = async (req, res) => {
    let resultado = validationResult(req);

    console.log(req.body);

    if(!resultado.isEmpty()){
        return res.render('gestion/editar-proyecto',{
            pagina: 'Modifica tu proyecto',
            csrfToken: req.csrfToken(),
            errores: resultado.array(),
            datos: req.body
        })
    }

    const {id} = req.params;
    const{nombre} = req.usuario;
    const proyecto = await Proyecto.findByPk(id);
    const archivos = await Archivo.findAll({
        where: {
            proyectoId: proyecto.id
        }
    });


    for (const archivo of archivos) {
        if (req.body[`eliminar${archivo.nombre}`]) {
            console.log(`Eliminar archivo ${archivo.nombre} que se HA SELECCIONADO`)
            // El checkbox está seleccionado, por lo que el archivo debe ser eliminado

            // Elimina el archivo del sistema de archivos
            fs.unlinkSync(archivo.ruta_almacenamiento);

            // Elimina el archivo de la base de datos
            await archivo.destroy();
        }
    }

    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }

    try{
        const { titulo, descripcion, tutor, tecnologia, proyecto: tipo_proyecto, ciclo } = req.body;
        proyecto.set({titulo, descripcion, tutor, tecnologia, tipo_proyecto, ciclo});
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

const agregarMasArchivos = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findByPk(id);
    if(!proyecto){
        return res.redirect('/mis-proyectos');
    }
    if(req.usuario.id !== proyecto.usuarioId){
        return res.redirect('/mis-proyectos');
    }
    res.render('gestion/agregar-archivos-nuevos', {
        pagina: `Agrega mas archivos a tu proyecto ${proyecto.titulo}`,
        idProyectoOculto: proyecto.id,
        csrfToken: req.csrfToken(),
        proyecto
    })
}

const agregarArchivosNuevos = async (req, res) => {
    const {id} = req.params;
    const proyecto = await Proyecto.findByPk(id);
    console.log("ESTAMOS LLEGANDO HASTA AQUI")
    if(!proyecto){
        console.log("PERO QUE HA PASAO 1")
        return res.redirect(`/proyecto/editar/${id}`);
    }
    if(req.usuario.id !== proyecto.usuarioId){
        console.log("PERO QUE HA PASAO")
        return res.redirect(`/proyecto/editar/${id}`);
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
        return res.redirect(`/proyecto/editar/${id}`);

    }catch(error){
        console.log(error);
    }
}


export {
    info,
    inicio,
    filtro,
    dashboard,
    nuevoProyecto,
    guardarProyecto,
    agregarArchivos,
    guardarArchivos,
    editarProyecto,
    GuardarCambiosProyecto,
    eliminarProyecto,
    agregarMasArchivos,
    agregarArchivosNuevos
};