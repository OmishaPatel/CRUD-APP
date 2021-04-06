const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    source: {
        type:String,
        required:true
    },
    season: {
        type:Number,
        required:true
    },
    status:String

});

const Showdb = mongoose.model('showdb', schema);
module.exports = Showdb;