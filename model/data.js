const mongoose = require('mongoose');
const dataSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    info:{
        type:Map,
        required:true,
    }
})
module.exports=mongoose.model("dataSchema",dataSchema)