
const sequelize = require('sequelize');
const db = require('../models');
const path = require('path');
module.exports = function (app) {
   console.log('html-routes');

   app.get('/', function (req, res) {
      res.render(path.join(__dirname, '../views/index.handlebars'))
   });


   app.get('/:string', function (req, res) {

      if (req.params.string === "portfolio") {
         res.render(path.join(__dirname, '../views/portfolio.handlebars'))

      } else if (req.params.string === "contact") {
         res.render(path.join(__dirname, '../views/contact.handlebars'))

      } else {
         res.render(path.join(__dirname, '../views/index.handlebars'))

      }
   })

}

