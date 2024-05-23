import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
//Define donde se encuentra el archivo env
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.BD_URL, process.env.BD_USER, process.env.BD_PASSWORD ?? '', {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: true //Crea columnas de creacion y actualizacion
    },
    pool:{
        max: 5, //Conexiones máximas y mínimas
        min: 0, 
        acquire: 30000, //Tiempo que tendrá para realizar una consulta antes de marcar error
        idle: 10000 //Tiempo que estará sin movimiento antes de cerrar la conexión
    },
    operatorsAliases: false //Funión obsoleta de Sequelize
});

export default db;