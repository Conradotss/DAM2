import express from 'express'
import UsuariosRoutes from './routes/UsuariosRoutes.js'
//Crear App
const app = express()

//Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Routing
//funcion use busca todas las rutas que empiezan por la ruta marcada como parametro dentro de la clase UsuariosRoute
//A diferencia de funcion get que solo busca la ruta especifica "/"
app.use('/auth', UsuariosRoutes)

//Asociar puerto al proyecto
const puerto = 3000;
app.listen(puerto, ()=>{
    console.log(`Escuchando en el puerto ${puerto}`)
});