import express from 'express';
import {inicio} from '../controllers/InicioController.js';

const router = express.Router();

router.get('/', inicio );

export default router;