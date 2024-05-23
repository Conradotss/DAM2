import express from 'express';
import { body } from 'express-validator';
import { dashboard, nuevoProyecto, guardarProyecto, agregarArchivos, guardarArchivos, editarProyecto, GuardarCambiosProyecto, eliminarProyecto, inicio} from '../controllers/GestionArchivosController.js';
import proteccionRutas from '../middleware/proteccionRutas.js';
import upload from '../middleware/subirArchivos.js';

const router = express.Router();

router.get('/mis-proyectos',proteccionRutas, dashboard);
router.get('/nuevo-proyecto',proteccionRutas, nuevoProyecto);
router.post('/nuevo-proyecto', proteccionRutas,
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('descripcion')
                        .isLength({max: 200}).withMessage('La descripción es muy larga') 
                        .notEmpty().withMessage('Introduce una descripción del proyecto'),
    body('tecnologia').custom(value => {
        if(value === '0'){
            throw new Error('Selecciona una tecnología');
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
    body('tecnologia').custom(value => {
        if(value === '0'){
            throw new Error('Selecciona una tecnología');
        }
        return true;
    
    }).withMessage('Selecciona una tecnología')
, GuardarCambiosProyecto);
router.post('/proyecto/eliminar/:id', proteccionRutas, eliminarProyecto);

//Area Publica
router.get('/proyecto/:id', inicio);
export default router;