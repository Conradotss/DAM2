import bcrypt from 'bcrypt'

const usuarioDemo = [
{
    nombre: 'usuarioDemo',
    email: 'usuarioDemo@prueba.com',
    password: bcrypt.hashSync('usuarioDemo', 10),
    confirmado: 1
}
]
export default usuarioDemo;