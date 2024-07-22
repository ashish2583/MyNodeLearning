const mongoose = require('mongoose');
var personSchema=new mongoose.Schema({
    name:{
    type: String,
    required:true
    },
    age:{
        type:Number,
    },
    mobile:{
        type:Number,
        required:true
    },
    workType:{
        type:String,
        enum: ['chef','maneger','waiter'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Address:{
        type:String,
        default:"Varanasi"

    }
})
const Person=mongoose.model('users',personSchema);
module.exports=Person