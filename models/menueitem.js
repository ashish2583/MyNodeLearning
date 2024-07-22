const mongoose = require('mongoose');
var menuSchema=new mongoose.Schema({
    name:{
    type: String,
    required:true
    },
    price:{
        type:Number,
        required:true
    },
    test:{
        type:String,
        default:""
    },
    isDrink:{
        type:Boolean,
        required:true
    },
    ingredint:{
        type:[String],
        default:[]
    },
    num_sell:{
        type:Number,
        default:0

    }
})
const menueitem=mongoose.model('menues',menuSchema);
module.exports=menueitem