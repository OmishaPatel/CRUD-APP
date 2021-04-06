let Showdb = require('../model/model');

// Create and save new show
exports.create = (req,res)=> {
    //validate request
    if(!req.body){
        res.status(400).send({message: 'Content cannot be empty'});
        return;
    }

    //new user
    const show = new Showdb({
        name:req.body.name,
        source:req.body.source,
        season:req.body.season,
        status:req.body.status
    })

    //save user in the database
    show
        .save(show)
        .then(data => {
            //res.send(data)
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating show"
            });
        });
}
// retrieve and return all shows/single show
exports.find = (req,res)=> {
    if(req.query.id) {
        const id = req.query.id;

        Showdb.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({
                        message: "Show not found with id"+id
                    })
                } else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:"Error occurred while retrieving show with id"+id
                })
            })
    }else {
        Showdb.find()
            .then(show => {
                res.send(show)
        })
            .catch(err => {
                res.status(500).send({
                    message:err.message || "Error occurred while retrieving show information"
            })
        })
    }
}
// update a new show by show id
exports.update = (req,res)=> {
    if(!req.body){
       return res
        .status(400)
        .send({
            message: "Update data cannot be empty"
        }) 
    }
    const id = req.params.id;
    Showdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Cannot update show with ${id}. Show not found`
                })
            }else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error occurred while updating show information"
            })
        })
}
// Delete a show with specified show id in the request
exports.delete = (req,res)=> {
    const id = req.params.id;

    Showdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Cannot find the show."
                })
            } else {
                res.send({
                    message: "Show successfully deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete show with id="+id
            });
        });
}