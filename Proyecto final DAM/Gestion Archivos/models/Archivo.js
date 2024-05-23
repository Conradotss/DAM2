import { DataTypes } from "sequelize";
import db from '../config/database.js';

const Archivo = db.define('archivos',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ruta_almacenamiento: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

export default Archivo;