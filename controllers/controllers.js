// var db = require("../models");
// var path = require("path");


// module.exports = (app) => {
//     app.post("/comment", (req, res) => {
//         const data = req.body;
//         const commentArr = [];

//         db.Comments.create(data);
//         db.Comments.findAll({}).then(data => {

//             data.forEach(el => {

//                 commentArr.push(el.id + " " + el.comment + " ~ " + el.name);
//             })
//             res.status(200).end();

//         })
//     });


// }