import Usuario from "./Usuario.js";
import Proyecto from "./Proyecto.js";
import Archivo from "./Archivo.js";

Usuario.hasMany(Proyecto, { foreignKey: 'usuarioId' });
Proyecto.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Proyecto.hasMany(Archivo, { foreignKey: 'proyectoId' });
Archivo.belongsTo(Proyecto, { foreignKey: 'proyectoId' });

export{
    Usuario,
    Proyecto,
    Archivo
} 