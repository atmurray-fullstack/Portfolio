const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN_NAME
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'atmurray.fullstack@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (err, data) => {
        err ? cb(err, null) : cb(null, data);
    });
}


module.exports = sendMail;