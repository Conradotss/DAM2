import express from 'express'
import proteccionRutasTutor from '../middleware/proteccionRutasTutor.js';
import {formularioLoginTutor, autenticarTutor, filtroTutor, tutorDashboard, cerrarSessionTutor, inicioTutor, comentarioTutor} from '../controllers/TutorController.js'

const router = express.Router()
router.get('/tutor-login', formularioLoginTutor);
router.post('/tutor-login', autenticarTutor);

router.get('/proyectos-tutor', proteccionRutasTutor, tutorDashboard);
router.post('/proyectos-tutor', proteccionRutasTutor, filtroTutor);
router.post('/auth/cerrar-sesion', cerrarSessionTutor)

router.get('/proyecto-tutor/:id', inicioTutor);

router.post('/comentar-proyecto/:id', proteccionRutasTutor, comentarioTutor)

export default router