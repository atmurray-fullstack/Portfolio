const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '32589ef80e04c533e67f23b26bb45ffe-913a5827-8e647686',
        domain: "sandbox62f3b44bb5644b099db7a5dc275d940b.mailgun.org"
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