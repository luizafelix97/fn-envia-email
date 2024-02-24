const nodemailer = require('nodemailer');

const transporte = nodemailer.createTransport({
    host:'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'email@origem.com',
        pass: 'senhadoemail',
    }
});

transporte.sendMail({
    from: 'email@origem.com',
    to: 'email@destino.com',
    subject: 'titulo',
    html: 'email feito com nodejs html',
    text: 'email feito com nodejs texto',
})
.then(() => console.log('Email enviado com sucesso'))
.catch((err) => console.log('Ocorreu um erro no envio do email', err));