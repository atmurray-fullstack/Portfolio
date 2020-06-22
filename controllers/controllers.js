var db = require("../models");


module.exports = (app)=>{
    app.post("/comment", (req,res)=>{
        const data = req.body;
        console.log(data)
        db.comments.create(data);
        
    });


}