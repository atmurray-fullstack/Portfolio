const sendMail = require('../public/js/mail')

module.exports = function (app) {
    console.log('API-Routes')
    app.post('/email', (req, res) => {
        console.log('DATA: ', req.body)
        const { name, email, text } = req.body;
        sendMail(email, name, text, (err, data) => {
            err ? res.status(500).json({ message: 'Internal Error' }) : res.json({ message: 'Message received!' });
        });

    })


}