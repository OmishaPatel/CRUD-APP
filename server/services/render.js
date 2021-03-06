const axios = require('axios');

exports.homeRoutes = (req,res)=> {
    // Make a get request to api/shows
    axios.get('http://localhost:3000/api/shows')
        .then(function(response){
            res.render('index',{shows:response.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.add_show = (req,res)=> {
    res.render('add_show');
}
exports.update_show = (req,res)=> {
    axios.get('http://localhost:3000/api/shows', {params:{id:req.query.id}})
        .then(function(showdata){
            res.render("update_show", {show:showdata.data})
        })
        .catch(err => {
            res.send(err);
        })
}