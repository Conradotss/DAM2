import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
    console.log(datos)
    const{nombre, email, token} = datos

    const mailOptions = {
        from: 'pepitosandia527@gmail.com',
        to: email,
        subject: 'Correo de confirmacion Gestion Archivos',
        text: `Gracias por unirte ${nombre}`,
        html: `
            <h1>Bienvenido a Gestión Archivos</h1>
            <p>Puedes confirmar tu cuenta haciendo click en el siguiente enlace</p>
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirma tu cuenta</a>
        `
    }

    await transport.sendMail(mailOptions)
}

const emailRecuperarPassword = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
    console.log(datos)
    const{nombre, email, token} = datos

    const mailOptions = {
        from: 'pepitosandia527@gmail.com',
        to: email,
        subject: 'Recuperar Password',
        text: `Has solicitado el cambio de password, ${nombre}`,
        html: `
            <h1>Bienvenido a Gestión Archivos</h1>
            <p>Puedes cambiar tu password haciendo click en el siguiente enlace</p>
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}">Cambiar Password</a>
        `
    }

    await transport.sendMail(mailOptions)
}

export{
    emailRegistro,
    emailRecuperarPassword
}