import { DataTypes } from "sequelize";
import db from '../config/database.js';
import bcrypt from 'bcrypt'

const Tutor = db.define('tutor',{
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
        beforeCreate: async function (tutor) {
            const salt = await bcrypt.genSalt(10)
            tutor.password = await bcrypt.hash(tutor.password, salt)
        }
    },
    scopes: {
        sinPassword: {
            attributes: {exclude: ['password', 'token', 'confirmado', 'createdAt', 'updatedAt']}
        }
    }
});

Tutor.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

export default Tutor;