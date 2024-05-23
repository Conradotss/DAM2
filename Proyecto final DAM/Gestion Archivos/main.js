import express from 'express'
import UsuariosRoutes from './routes/UsuariosRoutes.js'
import GestionArchivosRoutes from './routes/GestionArchivosRoutes.js'
import db from './config/database.js'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'
//Crear App
const app = express()

//Conexión a la DB
try{
    await db.authenticate();
    db.sync();
    console.log("Conexión a la BD exitosa")
}catch(error){
    console.log(error)
}

//Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}))

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Habilitar Cookie Parser
app.use(cookieParser())

//Habilitar CSURF
app.use(csrf({cookie: true}))

//Routing
//funcion use busca todas las rutas que empiezan por la ruta marcada como parametro dentro de la clase UsuariosRoute
//A diferencia de funcion get que solo busca la ruta especifica "/"
app.use('/auth', UsuariosRoutes)
app.use('/', GestionArchivosRoutes)

//Carpeta publica
//Ubicamos la carpeta donde se encuentra tailwind
app.use(express.static('public'))

//Asociar puerto al proyecto
const puerto = process.env.PORT || 3000;
app.listen(puerto, ()=>{
    console.log(`Escuchando en el puerto ${puerto}`)
});