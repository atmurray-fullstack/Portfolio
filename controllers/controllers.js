var db = require("../models");
var path = require("path");


module.exports = (app)=>{
    app.post("/comment", (req,res)=>{
        const data = req.body;
        const commentArr=[]; 
        console.log(data)
        db.Comments.create(data);
        db.Comments.findAll({}).then(data=>{
            data.forEach(el=>{
                // if(commentArr.length >= 5){

                //     return 
                // }
                commentArr.push(el.id+" "+el.comment+" ~ "+el.name)
                console.log(commentArr);
            })
            console.log("here"+"=".repeat(50))
            console.log(path.join(__dirname, "../views/partials/comments.handlebars"))
            res.render(path.join(__dirname, "../views/portfolio.handlebars"),{comments:commentArr})
        })
    });


}