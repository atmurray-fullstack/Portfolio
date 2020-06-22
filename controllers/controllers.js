var db = require("../models");


module.exports = (app)=>{
    app.post("/comment", (req,res)=>{
        const data = req.body;
        const commentArr=[]; 
        console.log(data)
        db.comments.create(data);
        db.comments.findAll({}).then(data=>{
            data.forEach(el=>{
                if(commentArr.length >= 5){
                    return
                }
                commentArr.push(el.id+" "+el.comment+" ~ "+el.name)
                console.log(commentArr);
            })
            console.log("here"+"=".repeat(50))
            res.render("portfolio",{comments:commentArr});
        })
    });


}