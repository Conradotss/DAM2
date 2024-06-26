import multer from 'multer';
import fs from 'fs';
import path from 'path';
import {generarToken} from '../utils/tokens.js';



const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const{nombre} = req.usuario;
        

        const folderPath = `./public/uploads/${nombre}`;
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        cb(null, folderPath);
    },
    filename: function(req, file, cb){ //cb = callback
        cb(null, file.originalname) //generarToken() = nombre aleatorio para el archivo + extensión del archivo
    }
})

const upload = multer({ storage: storage })

export default upload; //exportamos la constante upload para poder usarla en otros archivos