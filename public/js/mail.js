const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '69660ead062e982775252b1189fa4fca-913a5827-99bc8ead',
        domain: 'sandboxee5da939040f4afe8be6241cc3d26ca6.mailgun.org'
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