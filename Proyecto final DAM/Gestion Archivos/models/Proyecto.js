import db from '../config/database.js';
import { DataTypes } from "sequelize";

const Proyecto = db.define('proyectos',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tutor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tecnologia: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    tipo_proyecto: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ciclo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
});

export default Proyecto;