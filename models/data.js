const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        default:"Harsh"
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        trim:true,
    },
    cinh:{
        type:Number,
        min:0,
        max:23,
        required:true,
    },
    cinm:{
        type:Number,
        min:0,
        max:59,
        required:true,
    },
    couth:{
        type:Number,
        min:0,
        max:23,
    },
    coutm:{
        type:Number,
        min:0,
        max:59,
    },
    status:{
        type:String,
        default:"Present"
    }
});
const Data=mongoose.model('Data',dataschema);
module.exports=Data;