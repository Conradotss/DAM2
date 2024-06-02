import bcrypt from 'bcrypt'

const tutorDemo = [
{
    nombre: 'tutorDemo',
    email: 'tutorDemo@prueba.com',
    password: bcrypt.hashSync('tutorDemo', 10),
    confirmado: 1
},
{
    nombre: 'tutorDemo1',
    email: 'tutorDemo1@prueba.com',
    password: bcrypt.hashSync('tutorDemo1', 10),
    confirmado: 1
},
{
    nombre: 'tutorDemo2',
    email: 'tutorDemo2@prueba.com',
    password: bcrypt.hashSync('tutorDemo2', 10),
    confirmado: 1
}
]
export default tutorDemo;