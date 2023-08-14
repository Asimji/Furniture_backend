const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    userId:String,
    userName:String,
   

},{
    versionKey:false
}
)

const cartModel=mongoose.model("cart",cartSchema);

module.exports=cartModel