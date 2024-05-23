import express from 'express'
import {formularioLogin, formularioRegistro, cerrarSesion, formularioOlvidePassword, confirmar, registro, resetPassword, comprobarToken, nuevoPassword, autenticar } from '../controllers/UsuarioController.js';




const router = express.Router()

router.get('/login', formularioLogin);
router.post('/login', autenticar);

router.post('/cerrar-sesion', cerrarSesion);

router.get('/registro', formularioRegistro);
router.post('/registro', registro);
router.get('/confirmar/:token', confirmar);


router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);


router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);


export default router