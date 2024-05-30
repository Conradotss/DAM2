import express from 'express';
import { body } from 'express-validator';
import {info, dashboard, filtro, nuevoProyecto, guardarProyecto, agregarArchivos, guardarArchivos, agregarMasArchivos, agregarArchivosNuevos, editarProyecto, GuardarCambiosProyecto, eliminarProyecto, inicio} from '../controllers/GestionArchivosController.js';
import proteccionRutas from '../middleware/proteccionRutas.js';
import upload from '../middleware/subirArchivos.js';

const router = express.Router();

router.get('/acerca-de', info);
router.get('/mis-proyectos',proteccionRutas, dashboard);
router.post('/mis-proyectos',proteccionRutas, filtro);
router.get('/nuevo-proyecto',proteccionRutas, nuevoProyecto);
router.post('/nuevo-proyecto', proteccionRutas,
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('descripcion')
                        .isLength({max: 200}).withMessage('La descripción es muy larga') 
                        .notEmpty().withMessage('Introduce una descripción del proyecto'),
    body('tutor').notEmpty().withMessage('Debes incluir el nombre del tutor'),
    body('tecnologia').notEmpty().withMessage('Introduce la tecnología usada en el proyecto'),
    body('proyecto').notEmpty().withMessage('Comenta el tipo de proyecto que es'),
    body('ciclo').custom(value => {
        if(value === '0'){
            throw new Error('Selecciona un ciclo');
        }
        return true;
    
    }).withMessage('Selecciona una tecnología')
,guardarProyecto);
router.get('/nuevo-proyecto/:id', proteccionRutas, agregarArchivos);
router.post('/gestion/agregar-archivos/:id', proteccionRutas ,upload.array('archivo', 10), guardarArchivos);
router.get('/proyecto/editar/:id', proteccionRutas, editarProyecto);
router.post('/proyecto/editar/:id', proteccionRutas,
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('descripcion')
                        .isLength({max: 200}).withMessage('La descripción es muy larga') 
                        .notEmpty().withMessage('Introduce una descripción del proyecto'),
    body('tutor').notEmpty().withMessage('Debes incluir el nombre del tutor'),
    body('tecnologia').notEmpty().withMessage('Introduce la tecnología usada en el proyecto'),
    body('proyecto').notEmpty().withMessage('Comenta el tipo de proyecto que es'),
    body('ciclo').custom(value => {
        if(value === '0'){
            throw new Error('Selecciona un ciclo');
        }
        return true;

    }).withMessage('Selecciona una tecnología')
, GuardarCambiosProyecto);
router.post('/proyecto/eliminar/:id', proteccionRutas, eliminarProyecto);
router.get('/agregarArchivos/:id', proteccionRutas, agregarMasArchivos);
router.post('/agregarArchivos/:id', proteccionRutas, upload.array('archivo', 10), agregarArchivosNuevos);

//Area Publica
router.get('/proyecto/:id', inicio);
export default router;