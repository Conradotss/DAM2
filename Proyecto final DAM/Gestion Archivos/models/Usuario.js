import { DataTypes } from "sequelize";
import db from '../config/database.js';
import bcrypt from 'bcrypt'

const Usuario = db.define('usuarios',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
},{
    hooks: {
        beforeCreate: async function (usuario) {
            const salt = await bcrypt.genSalt(10)
            usuario.password = await bcrypt.hash(usuario.password, salt)
        }
    },
    scopes: {
        sinPassword: {
            attributes: {exclude: ['password', 'token', 'confirmado', 'createdAt', 'updatedAt']}
        }
    }
});

Usuario.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

export default Usuario;