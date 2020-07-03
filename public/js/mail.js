const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '55ccb1ed998ee4b28443b5d6d6b5c01a-913a5827-1e806be2',
        domain: 'sandbox4c996e8b51b94d758e7c3ac73ebc0d9b.mailgun.org'
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