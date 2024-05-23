import {exit} from 'node:process'
import {Archivo, Proyecto, Usuario} from '../models/relaciones.js';
import usuarioDemo from './usuarioDemo.js';
import db from '../config/database.js';

const crearProyectos = async () => {
    try{
        await db.authenticate();

        await db.sync();

        await Promise.all([
            Usuario.bulkCreate(usuarioDemo)
        ])
    }catch(error){
        console.log(error);
        exit(1);
    }
}

const eliminarDatos = async () => {
    try{
        await db.sync({force: true})
        console.log("Datos eliminados correctamente")
        exit();
    }catch(error){
        console.log(error);
        exit(1)
    }
}

if(process.argv[2] === '-c'){
    crearProyectos();
}
if(process.argv[2] === '-e'){
    eliminarDatos();
}